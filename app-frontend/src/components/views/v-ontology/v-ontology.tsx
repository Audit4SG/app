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

  @Listen('openModal') openModalHandler(e) {
    this.modalLabel = e.detail.label;
    this.modalDefinition = e.detail.definition;
    this.modalProvocation = e.detail.provocation;
    this.modalReferences = e.detail.references;
    this.isModalOpen = true;
  }

  @Prop() history: RouterHistory;

  @State() isTooltipVisible: boolean = false;
  @State() cardStack: any = [];
  @State() modalLabel: string = '';
  @State() modalDefinition: string = '';
  @State() modalProvocation: string = '';
  @State() modalReferences: string = '';
  @State() isModalOpen: boolean = false;

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
          this.addCardToStack(data);
        } else if (clickedNode.attr('fill') === 'rgba(8, 242, 110, 1)') {
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
    // this.highlightNodes();
    // this.highlightEdges();

    const t = d3.zoomIdentity.translate(this.svgWidth / 2, this.svgHeight / 2).scale(0.075);
    d3.select(this.svgEl).transition().duration(2000).call(this.zoom.transform, t);

    // if (this.journey === 'selection') {
    //   this.isFilterContainerCollapsed = false;
    // } else if (this.journey === 'exploration') {
    //   this.isFilterContainerCollapsed = true;
    // }
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
          <l-spacer value={1}></l-spacer>
          <p-card-stack data={this.cardStack}></p-card-stack>
        </c-sticky-area>
        <c-sticky-area top="1em" right="1em">
          <e-text>Search</e-text>
          <l-spacer value={1}></l-spacer>
          <e-text>Topic list</e-text>
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
        <svg height={this.svgHeight} width={this.svgWidth} ref={el => (this.svgEl = el as SVGElement)} onClick={() => (this.isTooltipVisible = false)}></svg>
      </Host>
    );
  }
}

injectHistory(VOntology);
