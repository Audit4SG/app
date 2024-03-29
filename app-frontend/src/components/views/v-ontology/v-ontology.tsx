import { Component, Listen, Prop, State, Host, h } from '@stencil/core';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
import * as d3 from 'd3';
import { injectHistory, RouterHistory } from '@stencil/router';
import { state } from '../../../global/script';
gsap.registerPlugin(ScrollToPlugin);

@Component({
  tag: 'v-ontology',
  styleUrl: 'v-ontology.css',
  shadow: true,
})
export class VOntology {
  svgEl!: SVGElement;

  @Listen('buttonClick') handleButtonClick(e) {
    if (e.detail.action === 'openHowTo') {
      state.isMenuOpen = true;
      state.activeMenuItem = 'howTo';
      state.activeMenuLabel = 'How to';
    } else if (e.detail.action === 'closeToolTip') {
      this.isTooltipVisible = false;
    } else if (e.detail.action === 'deleteCard') {
      this.removeCardFromStack({ id: e.detail.value });
    } else if (e.detail.action === 'deleteAllCards') {
      this.cardStack.map(card => {
        this.removeCardFromStack({ id: card.id });
      });
      this.cardStack = [];
      this.updateCardStackInStore();
    } else if (e.detail.action === 'closeModal') {
      this.modalLabel = '';
      this.modalDefinition = '';
      this.modalProvocation = '';
      this.modalReferences = '';
      this.isModalOpen = false;
    } else if (e.detail.action === 'viewAuditSummary') {
      this.history.push('/summary');
    }
  }

  @Listen('inputEvent') handleInputEvent(e) {
    if (e.detail.name === 'topicSelection') {
      let nodes: any = JSON.parse(state.nodes);
      let obj: any;
      nodes.map((node: any) => {
        if (node.id === e.detail.value) {
          obj = node;
        }
      });
      if (e.detail.isChecked) {
        this.addCardToStack(obj);
      } else {
        this.removeCardFromStack(obj);
      }
      this.updateCardStackInStore();
    }
  }

  @Listen('event_LinkClick') handleLinkClick(e) {
    if (e.detail.action === 'flyTo') {
      this.flyTo(e.detail.value.split('#')[1]);
    }
  }

  @Listen('openModal') openModalHandler(e) {
    this.modalLabel = e.detail.label;
    this.modalDefinition = e.detail.definition;
    this.modalProvocation = e.detail.provocation;
    this.modalReferences = e.detail.references;
    this.isModalOpen = true;
  }

  @Listen('searchExpansion') handleSearchExpansion() {
    this.isSearchExpanded = true;
  }

  @Listen('searchContraction') handleSearchContraction() {
    this.isSearchExpanded = false;
  }

  @Listen('searchItemClick') handleSearchItemClick(e) {
    let topic: string = '';
    if (e.detail.type === 'Class') {
      topic = this.getTopicFromLabel(e.detail.label);
    } else if (e.detail.type === 'Relation') {
      this.highlightRelation(e.detail.sourceId, e.detail.targetId);
      topic = e.detail.sourceId;
    }
    this.flyTo(topic);
  }

  @Prop() history: RouterHistory;

  @State() isTooltipVisible: boolean = false;
  @State() cardStack: any = [];
  @State() modalLabel: string = '';
  @State() modalDefinition: string = '';
  @State() modalProvocation: string = '';
  @State() modalReferences: string = '';
  @State() isModalOpen: boolean = false;
  @State() isSearchExpanded: boolean = false;

  private svg: any;
  private graphContainer: any;
  private graph: any;

  private nodeElements: any;
  private nodeRelationElements: any;
  private textElements: any;
  private relationLabels: any;

  private svgHeight: number;
  private svgWidth: number;
  private nodes: any;
  private nodeRelations: any;
  private zoom: any;

  private timeout: any;
  private timeoutInMS: number = 1000;

  private tooltipLabel: string = '';
  private tooltipDefinition: string = '';
  private tooltipProvocation: string = '';
  private cursorX: number = 0;
  private cursorY: number = 0;

  componentWillLoad() {
    if (!state.isInitialized) {
      this.history.push('/', {});
    }
    this.svgHeight = window.innerHeight;
    this.svgWidth = window.innerWidth;
  }

  componentDidLoad() {
    if (state.nodes.length === 0 || state.nodeRelations.length === 0) {
      return;
    }
    if (state.cardStack.length > 0) {
      this.cardStack = JSON.parse(state.cardStack);
      this.cardStack = [...this.cardStack];
    }
    this.nodes = JSON.parse(state.nodes);
    this.nodeRelations = JSON.parse(state.nodeRelations);
    this.nodeRelations = [...this.nodeRelations];
    this.generateGraph();
  }

  generateGraph() {
    gsap.to(window, { duration: 0.1, scrollTo: { y: this.svgHeight / 2, x: this.svgWidth / 2 } });
    this.zoom = d3
      .zoom()
      .on('zoom', (event: any) => {
        this.graphContainer.attr('transform', event.transform);
      })
      .scaleExtent([0.04, 0.5]);
    this.svg = d3.select(this.svgEl).call(this.zoom);
    this.graphContainer = this.svg.append('g');
    this.graph = this.graphContainer.append('g');

    const linkForce: any = d3
      .forceLink()
      .id((link: any) => {
        return link.id;
      })
      .distance(1000)
      .strength(1);

    const simulation: any = d3
      .forceSimulation()
      .force('link', linkForce)
      .force('charge', d3.forceManyBody().strength(-5000))
      .force('center', d3.forceCenter(this.svgWidth / 2, this.svgHeight / 2));

    const dragDrop = d3
      .drag()
      .on('start', node => {
        node.fx = node.x;
        node.fy = node.y;
      })
      .on('drag', (event, node: any) => {
        simulation.alphaTarget(0.01).restart();
        node.fx = event.x;
        node.fy = event.y;
      })
      .on('end', (event, node: any) => {
        if (!event.active) {
          simulation.alphaTarget(0);
        }
        node.fx = null;
        node.fy = null;
      });

    this.nodeRelationElements = this.graph
      .append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(this.nodeRelations)
      .enter()
      .append('line')
      .attr('id', link => {
        return `${link.source.split('#')[1]}-${link.target.split('#')[1]}`;
      })
      .attr('stroke-width', 5)
      .attr('stroke', link => {
        if (!link.isVisible) {
          return 'none';
        } else {
          return 'rgb(1, 30, 43)';
        }
      })
      .on('click', (event, data) => {
        event.preventDefault();
        this.unhighlightRelation(data.source.id.split('#')[1], data.target.id.split('#')[1]);
      });

    this.nodeElements = this.graph
      .append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(this.nodes)
      .enter()
      .append('circle')
      .attr('id', node => {
        return node.id.split('#')[1];
      })
      .attr('r', 50)
      .attr('stroke-width', 10)
      .style('stroke', 'rgb(1, 30, 43)')
      .attr('fill', 'white')
      .style('filter', 'drop-shadow(0px 15px 8px rgb(0 0 0 / 0.4))')
      .call(dragDrop)
      .on('mouseenter', (event, data) => {
        this.isTooltipVisible = false;
        this.highlightNodeOnMouseEnter(data);
        this.timeout = setTimeout(() => {
          this.tooltipLabel = data.label;
          this.tooltipDefinition = data.description;
          this.tooltipProvocation = data.provocation;
          this.cursorX = event.pageX;
          this.cursorY = event.pageY;
          this.isTooltipVisible = true;
        }, this.timeoutInMS);
      })
      .on('mouseout', (event, data) => {
        event.preventDefault();
        this.unhighlightNodeOnMouseOut(data);
        clearTimeout(this.timeout);
      })
      .on('dragstart', event => {
        event.preventDefault();
        clearTimeout(this.timeout);
      })
      .on('click', (event, data) => {
        event.preventDefault();
        clearTimeout(this.timeout);
        let clickedNode = this.svg.select(`#${data.id.split('#')[1]}`);
        if (clickedNode.attr('fill') === 'white') {
          this.highlightRelationsWithNeighbours(data);
          this.addCardToStack(data);
        } else if (clickedNode.attr('fill') === 'rgba(8, 242, 110, 1)') {
          this.unhighlightRelationsWithNeighbours(data);
          this.removeCardFromStack(data);
        }
      });

    this.textElements = this.graph
      .append('g')
      .attr('class', 'texts')
      .selectAll('text')
      .data(this.nodes)
      .enter()
      .append('text')
      .text(node => {
        return node.label;
      })
      .attr('font-size', 42)
      .style('stroke', 'rgb(1, 30, 43)')
      .attr('dx', 75)
      .attr('dy', 10);

    this.relationLabels = this.graph
      .append('g')
      .attr('class', 'edge-texts')
      .selectAll('text')
      .data(this.nodeRelations)
      .enter()
      .append('text')
      .text(link => {
        if (link.label) {
          return link.label;
        } else {
          return '';
        }
      })
      .attr('font-size', 42)
      .attr('dx', 5)
      .attr('dy', 5);

    simulation.nodes(this.nodes).on('tick', () => {
      this.nodeElements
        .attr('cx', function (node) {
          return node.x;
        })
        .attr('cy', function (node) {
          return node.y;
        });
      this.nodeRelationElements
        .attr('x1', function (link) {
          return link.source.x;
        })
        .attr('y1', function (link) {
          return link.source.y;
        })
        .attr('x2', function (link) {
          return link.target.x;
        })
        .attr('y2', function (link) {
          return link.target.y;
        });

      this.textElements
        .attr('x', function (node) {
          return node.x;
        })
        .attr('y', function (node) {
          return node.y;
        });

      this.relationLabels
        .attr('x', function (link) {
          let x: any;
          if (link.label) {
            if (link.target.x > link.source.x) {
              x = link.source.x + (link.target.x - link.source.x) / 2;
            } else {
              x = link.target.x + (link.source.x - link.target.x) / 2;
            }
            return x;
          }
        })
        .attr('y', function (link) {
          let y: any;
          if (link.label) {
            if (link.target.y > link.source.y) {
              y = link.source.y + (link.target.y - link.source.y) / 2;
            } else {
              y = link.target.y + (link.source.y - link.target.y) / 2;
            }
            return y;
          }
        });
    });

    simulation.force('link').links(this.nodeRelations);

    const t = d3.zoomIdentity.translate(this.svgWidth / 2, this.svgHeight / 2).scale(0.075);
    d3.select(this.svgEl).transition().duration(2000).call(this.zoom.transform, t);
  }

  highlightNodeOnMouseEnter(data) {
    let nodeForHighlight = this.svg.select(`#${data.id.split('#')[1]}`);
    nodeForHighlight.transition().duration(1000).style('filter', 'drop-shadow(0px 0px 50px rgb(8, 242, 110))').attr('r', 75);
  }

  unhighlightNodeOnMouseOut(data) {
    let nodeForUnhighlight = this.svg.select(`#${data.id.split('#')[1]}`);
    nodeForUnhighlight
      .transition()
      .duration(500)
      .attr('r', 50)
      .end()
      .then(() => {
        nodeForUnhighlight.transition().duration(0).style('filter', 'drop-shadow(0px 15px 8px rgb(0 0 0 / 0.4))');
      });
  }

  addCardToStack(data) {
    let clickedNode = this.svg.select(`#${data.id.split('#')[1]}`);
    clickedNode.attr('fill', 'rgba(8, 242, 110, 1)');
    let obj = {
      id: data.id,
      label: data.label,
      definition: data.description,
      provocation: data.provocation,
      references: data.references,
    };
    this.cardStack.push(obj);
    this.updateCardStackInStore();
  }

  removeCardFromStack(data) {
    let clickedNode = this.svg.select(`#${data.id.split('#')[1]}`);
    clickedNode.attr('fill', 'white');
    this.cardStack = this.cardStack.filter(obj => {
      return obj.id !== data.id;
    });
    this.updateCardStackInStore();
  }

  updateCardStackInStore() {
    this.cardStack = [...this.cardStack];
    state.cardStack = JSON.stringify(this.cardStack);
    this.saveCardStackToDB();
  }

  flyTo(topic: string) {
    const selectedNode = this.svg.select(`#${topic}`);
    const x = selectedNode._groups[0][0].getAttribute('cx');
    const y = selectedNode._groups[0][0].getAttribute('cy');

    this.zoom.scaleTo(d3.select(this.svgEl), 0.25);
    this.zoom.translateTo(d3.select(this.svgEl), x, y);

    let count = 0;
    let timeout = setInterval(() => {
      if (count % 2 === 0) {
        selectedNode.attr('fill', '#08f26e');
      } else {
        selectedNode.attr('fill', 'white');
      }
      count = count + 1;
      if (count > 3) {
        clearTimeout(timeout);
      }
    }, 500);
    setTimeout(() => {
      this.cardStack.map(item => {
        if (item.id === topic) {
          let selectedTopicNode = this.svg.select(`#${topic.split('#')[1]}`);
          selectedTopicNode.attr('fill', 'rgba(8, 242, 110, 1)');
        }
      });
    }, 2000);
  }

  highlightRelation(source: string, target: string) {
    this.svg.select(`#${source}-${target}`).style('filter', 'drop-shadow(0px 15px 15px rgb(8, 242, 110))');
  }

  unhighlightRelation(source: string, target: string) {
    this.svg.select(`#${source}-${target}`).style('filter', 'drop-shadow(0px 0px 0px rgb(0, 0, 0))');
  }

  highlightRelationsWithNeighbours(node: any) {
    let neighbourRelationIds: any = this.getNeighbourRelationIds(node.id);
    neighbourRelationIds.map((neighbourRelationId: string) => {
      this.svg.select(`#${neighbourRelationId}`).style('filter', 'drop-shadow(0px 15px 15px rgb(8, 242, 110))');
    });
  }

  unhighlightRelationsWithNeighbours(node: any) {
    let neighbourRelationIds: any = this.getNeighbourRelationIds(node.id);
    neighbourRelationIds.map((neighbourRelationId: string) => {
      this.svg.select(`#${neighbourRelationId}`).style('filter', 'drop-shadow(0px 0px 0px rgb(0, 0, 0))');
    });
  }

  getNeighbourRelationIds(nodeId: string) {
    let neighbourRelationIds: any = [];
    this.nodeRelations.map((relation: any) => {
      if (nodeId === relation.target.id || nodeId === relation.source.id) {
        neighbourRelationIds.push(`${relation.source.id.split('#')[1]}-${relation.target.id.split('#')[1]}`);
      }
    });
    return neighbourRelationIds;
  }

  getTopicFromLabel(label: string) {
    let topic: string = '';
    this.nodes.map((node: any) => {
      if (label === node.label) {
        topic = node.id.split('#')[1];
      }
    });
    return topic;
  }

  async saveCardStackToDB() {
    let url: string = document.domain === 'localhost' ? 'http://localhost:3334/save-card-stack' : 'https://app-api.audit4sg.org/save-card-stack';
    let selectedCardIds: any = [];

    this.cardStack.map((card: any) => {
      selectedCardIds.push(card.id);
    });

    let options: any = {
      method: 'POST',
      body: JSON.stringify({ sessionId: state.sessionId, selectedCardIds: selectedCardIds }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    await fetch(url, options)
      .then(response => response.json())
      .then(async data => {
        if (data.success) {
          console.log('Card saved in DB');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleSvgClick() {
    this.isTooltipVisible = false;
    this.isSearchExpanded = false;
  }

  render() {
    return (
      <Host>
        <p-modal open={this.isModalOpen} label={this.modalLabel} definition={this.modalDefinition} provocation={this.modalProvocation} references={this.modalReferences}></p-modal>
        {this.isTooltipVisible && (
          <p-tooltip x={this.cursorX} y={this.cursorY} label={this.tooltipLabel} definition={this.tooltipDefinition} provocation={this.tooltipProvocation}></p-tooltip>
        )}
        <c-sticky-area top="1em" left="1em" zIndex={9}>
          <p-navigation share={this.cardStack.length > 0 ? true : false}></p-navigation>
          <l-spacer value={0.5}></l-spacer>
          <p-card-stack data={this.cardStack}></p-card-stack>
        </c-sticky-area>
        <c-sticky-area top="1em" right="1em" zIndex={99}>
          {state.isMenuOpen && <p-search expand={this.isSearchExpanded}></p-search>}
        </c-sticky-area>
        <c-sticky-area top="3.5em" right="1em">
          <p-topic-list></p-topic-list>
        </c-sticky-area>
        <c-sticky-area bottom="1em" right="1em">
          <e-link href="https://audit4sg.org" target="_blank">
            <img src="../../../assets/icon/icon.png" width={75} />
          </e-link>
        </c-sticky-area>
        <c-sticky-area bottom="1em" left="1em">
          <e-button action="openHowTo" variant="question">
            <ph-question size="2.25em" background="white"></ph-question>
          </e-button>
        </c-sticky-area>
        <svg height={this.svgHeight} width={this.svgWidth} ref={el => (this.svgEl = el as SVGElement)} onClick={() => this.handleSvgClick()}></svg>
      </Host>
    );
  }
}

injectHistory(VOntology);
