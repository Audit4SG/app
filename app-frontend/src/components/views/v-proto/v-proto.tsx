import { Component, Prop, Host, FunctionalComponent, State, Listen, h } from '@stencil/core';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin);

import * as jsonld from 'jsonld';
import * as d3 from 'd3';
import { Client } from 'typesense';
import { state } from '../../../global/script';
import { RouterHistory, injectHistory } from '@stencil/router';

interface LooseObject {
  [key: string]: any;
}

@Component({
  tag: 'v-proto',
  styleUrl: 'v-proto.css',
  shadow: true,
})
export class VProto {
  el_Svg!: SVGElement;
  el_ToolTip!: HTMLDivElement;
  filterContainerEl!: HTMLDivElement;
  searchContainerEl!: HTMLDivElement;

  private svg: any;
  private svgContent: any;
  private svgGraph: any;

  @Prop() history: RouterHistory;

  @State() width = 0;
  @State() height = 0;
  @State() isModalVisible: boolean = false;
  @State() journey: string = 'selection';
  @State() modalStep: number = 0;
  @State() isDemoStarted: boolean = false;
  @State() isStartButtonDisabled: boolean = false;
  @State() tooltipTitle: string = '';
  @State() tooltipDescription: string = '';
  @State() cardStack: any = [];
  @State() isLinkCopied: boolean = false;
  @State() shareUrl: string = '';

  @Listen('buttonClick') buttonClick(e) {
    if (e.detail.action === 'Next') {
      this.modalStep = this.modalStep + 1;
      this.isStartButtonDisabled = true;
    } else if (e.detail.action === 'Back') {
      this.modalStep = this.modalStep - 1;
      this.isStartButtonDisabled = false;
    } else if (e.detail.action === 'Start') {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.isDemoStarted = true;
      this.isModalVisible = false;
      this.generate_Graph();
    } else if (e.detail.action === 'copyLink') {
      navigator.clipboard.writeText(this.shareUrl);
      this.isLinkCopied = true;
      setTimeout(() => {
        this.isLinkCopied = false;
      }, 1000);
    }
  }

  @Listen('radioInput') handle_RadioInput(e) {
    if (e.detail.name === 'journey') {
      this.journey = e.detail.value;
    }
  }

  @Listen('deleteAllCardsEvent') deleteAllCardsHandler() {
    this.unhilightNodes();
    this.cardStack = [];
    this.cardStack = [...this.cardStack];
  }

  @Listen('checkboxInput') handle_CheckboxInput(e) {
    if (e.detail.name === 'topics') {
      if (e.detail.action === 'add') {
        if (this.isDemoStarted) {
          this.highlightNode(e.detail.value);
          this.highlightEdge(e.detail.value);
        }
        this.pushIntoCardStack(e.detail.value);
      } else if (e.detail.action === 'remove') {
        if (this.isDemoStarted) {
          this.unhilightNode(e.detail.value);
          this.unhighlightEdge(e.detail.value);
        }
        this.popFromCardStack(e.detail.value);
      }
      this.checkStartButtonState();
    }
  }

  @Listen('event_LinkClick') handle_LinkClick(e) {
    if (e.detail.action === 'flyTo') {
      this.flyTo(e.detail.value.split('#')[1]);
    } else if (e.detail.action === 'toggleTopicFilter') {
      this.isFilterContainerCollapsed = !this.isFilterContainerCollapsed;
      if (this.isFilterContainerCollapsed) {
        this.animateFilterContainerContraction();
      } else {
        this.animateFilterContainerExpansion();
      }
    }
  }

  @Listen('showModal') showModalHandler(e) {
    this.modalLabel = e.detail.label;
    this.modalDescription = e.detail.description;
    this.modalProvocation = e.detail.provocation;
    this.modalReferences = e.detail.references;
    this.showModal();
  }

  @Listen('deleteCardEvent') deleteCardEventHandler(e) {
    this.removeFromCardStack(e.detail);
  }

  checkStartButtonState() {
    if (this.cardStack.length > 0) {
      this.isStartButtonDisabled = false;
    } else {
      this.isStartButtonDisabled = true;
    }
  }

  private nodeElements: any;
  private linkElements: any;
  private textElements: any;
  private linkLabels: any;
  private topicOptions: any = [];
  private class_Pure: any = [];
  private nodes: any = [];
  private links: any = [];
  private jsonld_Flattened: any;
  private zoom: any;
  private timeout: any;
  private timeoutInMS: number = 1000;

  componentWillLoad() {
    this.isModalVisible = true;
    this.initTypesenseClient();
  }

  private isEditMode: boolean = false;

  componentDidLoad() {
    this.fetch_ViewData();
    if (this.history.location.state) {
      if (this.history.location.state.cardStack) {
        this.isEditMode = true;
        this.journey = 'exploration';
        this.isDemoStarted = true;
        this.isModalVisible = false;
      }
    }
  }

  async fetch_ViewData() {
    let url: string = document.domain === 'localhost' ? 'http://localhost:3334' : 'https://app-api.audit4sg.org';
    let options: any = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    await fetch(url, options)
      .then(response => response.json())
      .then(async data => {
        this.process_Jsonld(JSON.parse(data.payload));
        state.sessionId = data.sessionId;
        this.shareUrl = document.domain === 'localhost' ? `http://localhost:3333/reading/${state.sessionId}` : `https://app.audit4sg.org/reading/${state.sessionId}`;
      })
      .catch(error => {
        console.log(error);
      });
  }

  async process_Jsonld(data_JSONLD: any) {
    this.jsonld_Flattened = await jsonld.flatten(data_JSONLD);
    this.get_Classes();
    this.generate_Nodes();
    this.generate_Links();
    this.generate_TopNodes();
    this.generate_ObjectLinks();

    if (this.isEditMode) {
      this.cardStack = [...this.history.location.state.cardStack];
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.generate_Graph();
    }
  }

  get_Classes() {
    let class_Pure_Raw: any = [];
    let class_Blank_Raw: any = [];

    this.jsonld_Flattened.map((item: any) => {
      let array_Type = item['@type'];
      let id = item['@id'];
      if (array_Type.length === 1) {
        let str_Type = array_Type[0].split('#')[1];
        if (str_Type === 'Class') {
          if (id.includes('_:b')) {
            class_Blank_Raw.push(item);
          } else {
            class_Pure_Raw.push(item);
          }
        }
      }
    });

    class_Pure_Raw.map((item: any) => {
      let id = '';
      let label = '';
      let subClassOf = '';

      id = item['@id'];
      label = id.split('#')[1];

      subClassOf = '';
      if (item['http://www.w3.org/2000/01/rdf-schema#subClassOf']) {
        subClassOf = item['http://www.w3.org/2000/01/rdf-schema#subClassOf'][0]['@id'];
      }

      let description = '';
      let provocation = '';
      let references = '';

      if (item['http://www.w3.org/2000/01/rdf-schema#description']) {
        description = item['http://www.w3.org/2000/01/rdf-schema#description'][0]['@value'];
      } else {
        description = '(To be updated)';
      }

      if (item['http://www.w3.org/2000/01/rdf-schema#provocation']) {
        provocation = item['http://www.w3.org/2000/01/rdf-schema#provocation'][0]['@value'];
      } else {
        provocation = '(To be updated)';
      }

      if (item['http://www.w3.org/2000/01/rdf-schema#references']) {
        references = item['http://www.w3.org/2000/01/rdf-schema#references'][0]['@value'];
      } else {
        references = '(To be updated)';
      }

      let obj = {
        id: id,
        label: label,
        subClassOf: subClassOf,
        description: description,
        provocation: provocation,
        references: references,
      };
      this.class_Pure.push(obj);
    });
  }

  generate_Nodes() {
    this.class_Pure.map((item: any) => {
      let obj = {
        id: item.id,
        label: item.label,
        description: item.description,
        provocation: item.provocation,
        references: item.references,
      };
      this.nodes.push(obj);
    });
  }

  generate_Links() {
    this.class_Pure.map((x: any) => {
      this.class_Pure.map((y: any) => {
        if (x.id === y.subClassOf) {
          let obj = {
            target: y.id,
            source: x.id,
            strength: 0.01,
          };
          this.links.push(obj);
        }
      });
    });
  }

  generate_ObjectLinks() {
    this.jsonld_Flattened.map((item: any) => {
      let type = item['@type'][0];
      let objectProperty: string = '';
      let domain: string = '';
      let range: string = '';

      if (type.split('#')[1] === 'ObjectProperty') {
        objectProperty = item['@id'].split('#')[1];
        if (item['http://www.w3.org/2000/01/rdf-schema#domain']) {
          domain = item['http://www.w3.org/2000/01/rdf-schema#domain'][0]['@id'];
        }

        if (item['http://www.w3.org/2000/01/rdf-schema#range']) {
          range = item['http://www.w3.org/2000/01/rdf-schema#range'][0]['@id'];
        }

        if (domain.length > 0 && range.length > 0) {
          let obj = {
            target: range,
            source: domain,
            strength: 0.1,
            label: objectProperty,
          };
          this.links.push(obj);
        }
      }
    });
  }

  generate_Graph() {
    gsap.to(window, { duration: 0.1, scrollTo: { y: this.height / 2, x: this.width / 2 } });

    this.zoom = d3.zoom().on('zoom', (event: any) => {
      this.svgContent.attr('transform', event.transform);
    });
    this.svg = d3.select(this.el_Svg).call(this.zoom);

    this.svgContent = this.svg.append('g');
    this.svgGraph = this.svgContent.append('g');

    var linkForce = d3
      .forceLink()
      .id(function (link: any) {
        return link.id;
      })
      .distance(1000)
      .strength(1);

    var simulation: any = d3
      .forceSimulation()
      .force('link', linkForce)
      .force('charge', d3.forceManyBody().strength(-5000))
      .force('center', d3.forceCenter(this.width / 2, this.height / 2));

    var dragDrop = d3
      .drag()
      .on('start', function (node) {
        node.fx = node.x;
        node.fy = node.y;
      })
      .on('drag', function (event, node: any) {
        simulation.alphaTarget(0.01).restart();
        node.fx = event.x;
        node.fy = event.y;
      })
      .on('end', function (event, node: any) {
        if (!event.active) {
          simulation.alphaTarget(0);
        }
        node.fx = null;
        node.fy = null;
      });

    this.linkElements = this.svgGraph
      .append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(this.links)
      .enter()
      .append('line')
      .attr('id', link => {
        return `${link.source.split('#')[1]}-${link.target.split('#')[1]}`;
      })
      .attr('stroke-width', 5)
      .attr('stroke', 'rgb(1, 30, 43)');

    this.nodeElements = this.svgGraph
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
        this.nodeHoverHighlight(data);
        this.timeout = setTimeout(() => {
          this.showTooltip(data.id.split('#')[1], data.description, event);
        }, this.timeoutInMS);
      })
      .on('mouseout', (event, data) => {
        event.preventDefault();
        this.nodeHoverUnhighlight(data);
        clearTimeout(this.timeout);
      })
      .on('dragstart', event => {
        event.preventDefault();
        clearTimeout(this.timeout);
      })
      .on('click', (event, data) => {
        event.preventDefault();
        clearTimeout(this.timeout);
        let selected_Node = this.svg.select(`#${data.id.split('#')[1]}`);
        if (selected_Node.attr('fill') === 'white') {
          // selected_Node.attr('fill', 'rgba(8, 242, 110, 1)');
          this.highlightNode(data.id);
          this.addToCardStack(data);
        } else if (selected_Node.attr('fill') === 'rgba(8, 242, 110, 1)') {
          // selected_Node.attr('fill', 'white');
          this.unhilightNode(data.id);
          this.removeFromCardStack(data);
        }
      });

    this.textElements = this.svgGraph
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

    this.linkLabels = this.svgGraph
      .append('g')
      .attr('class', 'edge-texts')
      .selectAll('text')
      .data(this.links)
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
      this.linkElements
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
      // this.descriptionElements
      //   .attr('x', function (node) {
      //     return node.x;
      //   })
      //   .attr('y', function (node) {
      //     return node.y;
      //   });
      this.linkLabels
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

    simulation.force('link').links(this.links);
    this.highlightNodes();
    this.highlightEdges();

    let t = d3.zoomIdentity.translate(this.width / 2, this.height / 2).scale(0.075);
    d3.select(this.el_Svg).transition().duration(2000).call(this.zoom.transform, t);

    if (this.journey === 'selection') {
      this.isFilterContainerCollapsed = false;
    } else if (this.journey === 'exploration') {
      this.isFilterContainerCollapsed = true;
    }
  }

  highlightNodes() {
    this.cardStack.map((item: any) => {
      let selected_Node = this.svg.select(`#${item.label}`);
      selected_Node.attr('fill', 'rgba(8, 242, 110, 1)');
    });
  }

  highlightEdges() {
    let linkIdsForHighlight = [];
    this.cardStack.map((item: any) => {
      this.links.map((link: any) => {
        if (item.id === link.source.id || item.id === link.target.id) {
          if (link.label) {
            let linkId = `${link.source.id.split('#')[1]}-${link.target.id.split('#')[1]}`;
            linkIdsForHighlight.push(linkId);
          }
        }
      });
    });
    linkIdsForHighlight.map((linkId: any) => {
      let highlightLink = this.svg.select(`#${linkId}`);
      highlightLink.style('filter', 'drop-shadow(0px 15px 15px rgb(8, 242, 110))');
    });
  }

  highlightNode(topic: string) {
    let selected_Node = this.svg.select(`#${topic.split('#')[1]}`);
    selected_Node.attr('fill', 'rgba(8, 242, 110, 1)');
  }

  pushIntoCardStack(topic: any) {
    console.log(topic);
    let obj: any;
    this.nodes.map((node: any) => {
      if (node.id === topic) {
        obj = node;
      }
    });
    this.cardStack.push(obj);
    this.cardStack = [...this.cardStack];
  }

  popFromCardStack(topic: string) {
    this.cardStack = this.cardStack.filter(obj => obj.id !== topic);
    this.cardStack = [...this.cardStack];
  }

  highlightEdge(selectedTopic: string) {
    let linkIdsForHighlight = [];
    this.links.map((link: any) => {
      if (selectedTopic === link.source.id || selectedTopic === link.target.id) {
        if (link.label) {
          let linkId = `${link.source.id.split('#')[1]}-${link.target.id.split('#')[1]}`;
          linkIdsForHighlight.push(linkId);
        }
      }
    });
    linkIdsForHighlight.map((linkId: any) => {
      let highlightLink = this.svg.select(`#${linkId}`);
      highlightLink.style('filter', 'drop-shadow(0px 15px 15px rgb(8, 242, 110))');
    });
  }

  unhilightNode(topic: string) {
    let selected_Node = this.svg.select(`#${topic.split('#')[1]}`);
    selected_Node.attr('fill', 'white');
  }

  unhilightNodes() {
    this.cardStack.map(node => {
      let selected_Node = this.svg.select(`#${node.id.split('#')[1]}`);
      selected_Node.attr('fill', 'white');
    });
  }

  unhighlightEdge(selectedTopic: string) {
    let linkIdsForUnhighlight = [];
    this.links.map((link: any) => {
      if (selectedTopic === link.source.id || selectedTopic === link.target.id) {
        if (link.label) {
          let linkId = `${link.source.id.split('#')[1]}-${link.target.id.split('#')[1]}`;
          linkIdsForUnhighlight.push(linkId);
        }
      }
    });
    linkIdsForUnhighlight.map((linkId: any) => {
      let highlightLink = this.svg.select(`#${linkId}`);
      highlightLink.style('filter', 'drop-shadow(0px 0px 0px rgb(0, 0, 0))');
    });
  }

  generate_TopNodes() {
    let nodesWithParents = [];
    this.nodes.map((node: any) => {
      this.links.map((link: any) => {
        if (node.id === link.target) {
          nodesWithParents.push(node);
        }
      });
    });
    let nodesWithoutParents = [];
    this.nodes.map((node: any) => {
      let doesItHaveParents = false;
      nodesWithParents.map((nodeWithParent: any) => {
        if (node.id === nodeWithParent.id) {
          doesItHaveParents = true;
        }
      });
      if (!doesItHaveParents) {
        nodesWithoutParents.push(node);
      }
    });

    nodesWithoutParents.map(nodeWithoutParents => {
      let obj = {
        label: nodeWithoutParents.label,
        value: nodeWithoutParents.id,
      };
      this.topicOptions.push(obj);
    });
  }

  flyTo(topic: string) {
    const selected_Node = this.svg.select(`#${topic}`);
    const x = selected_Node._groups[0][0].getAttribute('cx');
    const y = selected_Node._groups[0][0].getAttribute('cy');

    this.zoom.scaleTo(d3.select(this.el_Svg), 0.25);
    this.zoom.translateTo(d3.select(this.el_Svg), x, y);

    let count = 0;
    let timeout = setInterval(() => {
      if (count % 2 === 0) {
        selected_Node.attr('fill', 'yellow');
      } else {
        selected_Node.attr('fill', 'white');
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

  handleDropDownChange(e: any) {
    this.timeoutInMS = e.target.value;
  }

  handleButtonClick(name: string) {
    if (name === 'hideTooltip') {
      this.hideTooltip();
    } else if (name === 'closeExportModal') {
      this.isExportModalOpen = false;
    }
  }

  ExportModal: FunctionalComponent = () => (
    <div class="modal">
      <div class="modal-window">
        <l-row justifyContent="space-between">
          <e-text variant="heading">Share your audit</e-text>
          <button onClick={() => this.handleButtonClick('closeExportModal')} class="control-button">
            <ph-x-circle size={this.iconSize} />
          </button>
        </l-row>
        <l-spacer value={1}></l-spacer>
        <div class="shareable-link-container">
          <e-text>{this.shareUrl}</e-text>
        </div>
        <l-row justifyContent="space-between">
          <div></div>
          {this.isLinkCopied ? <e-text>Link copied!</e-text> : <e-button action="copyLink">Copy Link</e-button>}
        </l-row>
        <l-spacer value={1}></l-spacer>
      </div>
    </div>
  );

  Modal: FunctionalComponent = () => (
    <div id="modal__container">
      <div id="modal__content">
        {this.modalStep === 0 && (
          <div>
            <e-text variant="heading">Choose your auditing journey</e-text>
            <l-spacer value={0.6}></l-spacer>
            <e-input type="radio" name="journey" value="selection" checked={this.journey === 'selection' ? true : false} label="I will audit certain topics"></e-input>
            <l-spacer value={0}></l-spacer>
            <e-input type="radio" name="journey" value="exploration" checked={this.journey === 'exploration' ? true : false} label="I will explore all the topics"></e-input>
            <l-spacer value={1}></l-spacer>
            <l-row justifyContent="space-between">
              <div></div>
              <e-button action={this.journey === 'selection' ? 'Next' : 'Start'} disabled={this.isStartButtonDisabled}>
                {this.journey === 'selection' ? 'Next' : 'Start'}
              </e-button>
            </l-row>
          </div>
        )}
        {this.modalStep === 1 && (
          <div>
            <e-text variant="heading">Choose topics</e-text>
            <l-spacer value={1.5}></l-spacer>
            <div id="topic-list">
              {this.topicOptions.map((topic: any) => (
                <div>
                  <e-input type="checkbox" name="topics" value={topic.value} checked={false} label={topic.label}></e-input>
                  <l-spacer value={0}></l-spacer>
                </div>
              ))}
            </div>
            <l-spacer value={1}></l-spacer>
            <l-row justifyContent="space-between">
              <e-button variant="link" action="Back">
                Back
              </e-button>
              <e-button action="Start" disabled={this.isStartButtonDisabled}>
                Start
              </e-button>
            </l-row>
          </div>
        )}
      </div>
      <div id="modal__background"></div>
    </div>
  );

  private iconSize: string = '1.25em';
  @State() isFilterContainerCollapsed: boolean = true;

  private tl: any = gsap.timeline();
  animateFilterContainerExpansion() {
    this.tl.to(this.filterContainerEl, { height: 'auto', duration: 0.25 });
  }

  animateFilterContainerContraction() {
    this.tl.to(this.filterContainerEl, { overflow: 'hidden', duration: 0 });
    this.tl.to(this.filterContainerEl, { height: '30px', duration: 0.25 });
  }

  FilterContainer: FunctionalComponent = () => (
    <div
      class={`filter-container ${this.journey === 'exploration' ? 'filter-container--exploration' : 'filter-container--selection'}`}
      ref={el => (this.filterContainerEl = el as HTMLDivElement)}
    >
      <l-row justifyContent="space-between" align="center">
        <e-text variant="heading">Topics</e-text>
        <e-link event={true} action="toggleTopicFilter">
          {this.isFilterContainerCollapsed ? <ph-caret-circle-down size={this.iconSize} /> : <ph-minus-circle size={this.iconSize} />}
        </e-link>
      </l-row>
      <l-spacer value={0.5}></l-spacer>
      {this.topicOptions.map((topic: any) => (
        <l-row justifyContent="space-between">
          <e-input type="checkbox" name="topics" value={topic.value} checked={this.isSelected(topic.value)} label={topic.label}></e-input>
          <e-link event={true} action="flyTo" value={topic.value}>
            <ph-map-pin color="#06c258"></ph-map-pin>
          </e-link>
        </l-row>
      ))}
    </div>
  );

  isSelected(topicToCheck) {
    let isSelected: boolean = false;
    this.cardStack.map(item => {
      if (item.id === topicToCheck) {
        isSelected = true;
      }
    });
    return isSelected;
  }

  showTooltip(tooltipTitle: string, tooltipDescription: string, event: any) {
    this.tooltipTitle = tooltipTitle;
    this.tooltipDescription = tooltipDescription;
    this.el_ToolTip.style.display = 'block';
    this.el_ToolTip.style.top = `${event.pageY + 20}px`;
    this.el_ToolTip.style.left = `${event.pageX - 100}px`;
  }

  hideTooltip() {
    this.el_ToolTip.style.display = 'none';
  }

  nodeHoverHighlight(data) {
    let selected_Node = this.svg.select(`#${data.id.split('#')[1]}`);
    selected_Node.transition().duration(1000).style('filter', 'drop-shadow(0px 0px 50px rgb(8, 242, 110))').attr('r', 75);
  }

  nodeHoverUnhighlight(data) {
    let selected_Node = this.svg.select(`#${data.id.split('#')[1]}`);
    selected_Node.transition().duration(250).attr('r', 50);
    selected_Node.transition().duration(0).style('filter', 'drop-shadow(0px 15px 8px rgb(0 0 0 / 0.4))').attr('r', 50);
  }

  addToCardStack = (data: any) => {
    let obj = {
      id: data.id,
      label: data.label,
      description: data.description,
      provocation: data.provocation,
      references: data.references,
    };
    this.cardStack.push(obj);
    this.cardStack = [...this.cardStack];
  };

  removeFromCardStack = (data: any) => {
    this.cardStack = this.cardStack.filter(obj => {
      return obj.id !== data.id;
    });
    this.cardStack = [...this.cardStack];
    this.unhilightNode(data.id);
  };

  LeftBar: FunctionalComponent = () => <div id="left-sidebar">{this.cardStack.length < 7 ? <this.BasicList></this.BasicList> : <this.CompactList></this.CompactList>}</div>;

  BasicList: FunctionalComponent = () => (
    <div>
      {this.cardStack.map(card => (
        <p-basic-card-2
          id={card.id}
          label={card.label}
          description={card.description}
          provocation={card.provocation}
          references={card.references}
          isExpanded={this.cardStack.length > 2 ? false : true}
        ></p-basic-card-2>
      ))}
    </div>
  );

  CompactList: FunctionalComponent = () => <p-compact-list stack={JSON.stringify(this.cardStack)}></p-compact-list>;

  handleBodyClick() {
    if (this.el_ToolTip.style.display === 'block') {
      this.hideTooltip();
    }
  }

  handleModalButtonClick(name: string) {
    if (name === 'toggleModalDefinition') {
      this.isModalDefinitionExpanded = !this.isModalDefinitionExpanded;
    } else if (name === 'toggleModalQuestion') {
      this.isModalQuestionExpanded = !this.isModalQuestionExpanded;
    } else if (name === 'toggleModalReference') {
      this.isModalReferenceExpanded = !this.isModalReferenceExpanded;
    } else if (name === 'closeModal') {
      this.closeModal();
    }
  }

  @State() isModalDefinitionExpanded: boolean = false;
  @State() isModalQuestionExpanded: boolean = true;
  @State() isModalReferenceExpanded: boolean = false;

  @State() modalLabel: string = '';
  @State() modalDescription: string = '';
  @State() modalProvocation: string = '';
  @State() modalReferences: string = '';

  modalBackground!: HTMLDivElement;
  modalContent!: HTMLDivElement;

  showModal() {
    this.tl.to(this.modalBackground, { display: 'block', duration: 0 });
    this.tl.to(this.modalBackground, { opacity: 1, duration: 0.25 });
    this.tl.to(this.modalContent, { display: 'block', duration: 0 });
    this.tl.to(this.modalContent, { opacity: 1, duration: 0.25 });
  }

  closeModal() {
    this.tl.to(this.modalContent, { opacity: 0, duration: 0.25 });
    this.tl.to(this.modalContent, { display: 'none', duration: 0 });
    this.tl.to(this.modalBackground, { opacity: 0, duration: 0.25 });
    this.tl.to(this.modalBackground, { display: 'none', duration: 0 });
    this.isModalQuestionExpanded = true;
  }

  private iconSizeBig: string = '2em';
  @State() isMenuOpen: boolean = false;

  handleMenuButtonClick() {
    this.isMenuOpen = !this.isMenuOpen;
    this.activeMenuButton = '';

    if (!this.isMenuOpen) {
      this.closeMenuContent();
    }
  }

  searchBox!: HTMLInputElement;

  onSearchBoxFocus() {
    this.tl.to(this.searchBox, { width: '50%', duration: 0.25 });
    this.tl.to(this.filterContainerEl, { opacity: 0, duration: 0.15 });
  }

  onSearchBoxBlur() {
    if (this.searchString.length > 0) {
      return;
    }
    this.tl.to(this.searchBox, { width: 'auto', duration: 0.25 });
    this.tl.to(this.filterContainerEl, { opacity: 1, duration: 0.25 });
  }

  @State() activeMenuButton: string = '';
  @State() isMenuContentVisible: boolean = false;
  @State() menuContent: string = '';

  menuButtonClickHandler(activeMenuButton: string) {
    this.activeMenuButton = activeMenuButton;
    if (this.activeMenuButton.length > 0) {
      this.isMenuContentVisible = true;
    } else {
      this.isMenuContentVisible = false;
    }
  }

  closeMenuContent() {
    this.activeMenuButton = '';
    this.isMenuContentVisible = false;
  }

  private searchString: string = '';
  private inputTimeout: any;
  private typesenseClient: any;

  @State() results: any = [];

  initTypesenseClient() {
    let host: string = document.domain === 'localhost' ? 'localhost' : 'typesense-api.audit4sg.org';
    let protocol: string = document.domain === 'localhost' ? 'http' : 'https';
    let port: number = document.domain === 'localhost' ? 8108 : 443;

    this.typesenseClient = new Client({
      nodes: [
        {
          host: host,
          port: port,
          protocol: protocol,
        },
      ],
      apiKey: 'Y58xEcn6fuPXAbtYl7p9Nb7NeEXupfiI',
      connectionTimeoutSeconds: 10,
    });
  }

  handleInput(e) {
    clearTimeout(this.inputTimeout);
    this.searchString = e.target.value.trim();
    if (!this.searchString) {
      this.clearSearchResults();
      return;
    }
    this.inputTimeout = setTimeout(() => {
      this.handleSearch();
    }, 500);
  }

  handleSearch() {
    let searchParams = {
      q: this.searchString,
      query_by: 'label,type,description,provocation,references,embedding',
      prefix: false,
    };
    this.clearSearchResults();
    this.typesenseClient
      .collections('relaio-openai-v2')
      .documents()
      .search(searchParams)
      .then(results => {
        let resultsRaw = results.hits;
        resultsRaw.map((result: any) => {
          let obj: LooseObject = {
            type: result.document.type,
            label: result.document.label,
            description: result.document.description,
            provocation: result.document.provocation,
            references: result.document.references,
          };

          if (result.document.type === 'Relation') {
            let { source, target } = this.findRelationSourceTarget(result.document.label);
            obj.source = source;
            obj.target = target;
          }

          this.results.push(obj);
        });
        this.results = [...this.results];
      });
  }

  findRelationSourceTarget(label: string) {
    let source: string;
    let target: string;
    this.links.map((link: any) => {
      if (link.label === label) {
        source = link.source.label;
        target = link.target.label;
      }
    });

    return {
      source: source,
      target: target,
    };
  }

  clearSearchResults() {
    this.results = [];
    this.results = [...this.results];
  }

  handlePostSearchClick() {
    this.results = [];
    this.results = [...this.results];
    this.searchString = '';
    this.searchBox.value = '';
    this.onSearchBoxBlur();
  }

  handleSearchClick(label: string) {
    let type: string = '';
    let source: string = '';

    this.results.map(item => {
      if (label === item.label) {
        type = item.type;
        source = item.source;
      }
    });
    if (type === 'Class') {
      let nodeId: string = '';
      this.nodes.map((node: any) => {
        if (node.label === label) {
          nodeId = node.id;
        }
      });
      this.flyTo(label);
      this.pushIntoCardStack(nodeId);
    } else if (type === 'Relation') {
      let sourceId: string = '';
      this.nodes.map((node: any) => {
        if (node.label === source) {
          sourceId = node.id;
        }
      });
      this.flyTo(source);
      this.highlightEdge(sourceId);
    }
    this.handlePostSearchClick();
  }

  @State() isExportModalOpen: boolean = false;
  openExportModal() {
    if (this.cardStack.length === 0) {
      return alert('There is nothing to export');
    }
    this.saveStackToDB();
  }

  copyContainer!: HTMLDivElement;

  async saveStackToDB() {
    let url: string = document.domain === 'localhost' ? 'http://localhost:3334/share' : 'https://app-api.audit4sg.org/share';
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
          this.isExportModalOpen = true;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Host>
        <nav>
          <l-row justifyContent="space-between" align="center">
            <l-row align="center">
              <button class={`menu-button ${this.isMenuOpen ? 'menu-close' : 'menu-open'}`} onClick={() => this.handleMenuButtonClick()}>
                {this.isMenuOpen ? <ph-x size="1.3em" color="white" weight="bold"></ph-x> : <ph-list size="1.3em" weight="bold"></ph-list>}
              </button>
              {this.isMenuOpen && (
                <div>
                  &nbsp; &nbsp;
                  <button class={`pill ${this.activeMenuButton === 'How to' && 'pill--highlight'}`} onClick={() => this.menuButtonClickHandler('How to')}>
                    How to
                  </button>
                  &nbsp; &nbsp;
                  <button class={`pill ${this.activeMenuButton === 'Export' && 'pill--highlight'}`} onClick={() => this.openExportModal()}>
                    Export
                  </button>
                  &nbsp; &nbsp;
                  <button class={`pill ${this.activeMenuButton === 'About' && 'pill--highlight'}`} onClick={() => this.menuButtonClickHandler('About')}>
                    About
                  </button>
                  &nbsp; &nbsp;
                  <button class={`pill ${this.activeMenuButton === 'Credits' && 'pill--highlight'}`} onClick={() => this.menuButtonClickHandler('Credits')}>
                    Credits
                  </button>
                </div>
              )}
            </l-row>
          </l-row>
          <l-spacer value={1}></l-spacer>
          {this.isExportModalOpen && <this.ExportModal></this.ExportModal>}
          {this.isMenuContentVisible && (
            <div class="menu__content">
              <l-row justifyContent="space-between" align="center">
                <e-text variant="heading">{this.activeMenuButton}</e-text>
                <button onClick={() => this.closeMenuContent()} class="control-button">
                  <ph-x-circle size={this.iconSize} />
                </button>
              </l-row>
              <l-spacer value={1}></l-spacer>
              <e-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </e-text>
            </div>
          )}
        </nav>
        <div id="search-container" ref={el => (this.searchContainerEl = el as HTMLDivElement)}>
          <input
            id="search"
            class={this.isDemoStarted ? 'show-search' : 'hide-search'}
            onInput={e => this.handleInput(e)}
            onFocus={() => this.onSearchBoxFocus()}
            onBlur={() => this.onSearchBoxBlur()}
            ref={el => (this.searchBox = el as HTMLInputElement)}
            placeholder="🔍 Search something.."
          ></input>
          {this.results.length > 0 && (
            <ul id="search-results-list">
              {this.results.map((result: any) => (
                <li class="search-result-item" onClick={() => this.handleSearchClick(result.label)}>
                  {result.type === 'Class' && (
                    <div>
                      <span class="bubble green-bubble">{result.type}</span>
                      &nbsp;
                      <span>
                        <strong>{result.label}</strong>
                      </span>
                      <br />
                      <span>{result.description}</span>
                      {result.provocation && (
                        <div>
                          <br />
                          <div class="double-bubble-container">
                            <span class="bubble bubble-first grey-bubble">{result.label}</span>
                            <span class="bubble bubble-second green-bubble">Provocation</span>
                          </div>
                          <span>{result.provocation}</span>
                        </div>
                      )}
                      {result.provocation && (
                        <div>
                          <br />
                          <div class="double-bubble-container">
                            <span class="bubble bubble-first grey-bubble">{result.label}</span>
                            <span class="bubble bubble-second green-bubble">References</span>
                          </div>
                          <span>{result.references}</span>
                        </div>
                      )}
                    </div>
                  )}
                  {result.type === 'Relation' && (
                    <div>
                      <span class="bubble green-bubble">Relation</span>
                      <br />
                      <div class="search-relation-container">
                        <div class="class-name-container">
                          <div class="class-symbol"></div>
                          <span class="class-name">{result.source}</span>
                        </div>
                        &nbsp; &nbsp;
                        <div class="relation-symbol-container">
                          <div class="relation-line"></div>
                          <span class="relation-name-container">{result.label}</span>
                          <div class="relation-line"></div>
                        </div>
                        &nbsp; &nbsp;
                        <div class="class-name-container">
                          <div class="class-symbol"></div>
                          <span class="class-name">{result.target}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div class="modal-content" ref={el => (this.modalContent = el as HTMLDivElement)}>
          <header>
            <l-row justifyContent="space-between" align="center">
              <div class="header-item-1">
                <e-text>{this.modalLabel}</e-text>
              </div>
              <div class="header-item-2">
                <l-row>
                  <button onClick={() => this.handleModalButtonClick('toggleModalDefinition')} class="control-button">
                    {this.isModalDefinitionExpanded ? <ph-info size={this.iconSize} weight="fill" /> : <ph-info size={this.iconSize} weight="regular" />}
                  </button>
                  &nbsp;
                  <button onClick={() => this.handleModalButtonClick('toggleModalQuestion')} class="control-button">
                    {this.isModalQuestionExpanded ? <ph-minus-circle size={this.iconSize} /> : <ph-caret-circle-down size={this.iconSize} />}
                  </button>
                  &nbsp;
                  <button onClick={() => this.handleModalButtonClick('closeModal')} class="control-button">
                    <ph-x-circle size={this.iconSize} />
                  </button>
                </l-row>
              </div>
            </l-row>
          </header>
          <l-spacer value={0.5}></l-spacer>
          {this.isModalDefinitionExpanded && (
            <div>
              <em>
                <e-text>{this.modalDescription}</e-text>
              </em>
              {this.isModalQuestionExpanded && <div class="seperator"></div>}
            </div>
          )}
          {this.isModalQuestionExpanded && (
            <div>
              <e-text>{this.modalProvocation}</e-text>
              {this.isModalReferenceExpanded && <div class="seperator"></div>}
            </div>
          )}
          {this.isModalReferenceExpanded && (
            <div>
              <e-text>{this.modalReferences}</e-text>
            </div>
          )}
          {this.modalReferences.length > 0 && (
            <div>
              <l-spacer value={1}></l-spacer>
              <button
                class={this.isModalReferenceExpanded ? 'toggle-button hide-button' : 'toggle-button expand-button'}
                onClick={() => this.handleModalButtonClick('toggleModalReference')}
              >
                {this.isModalReferenceExpanded ? 'Hide references' : 'Show references'}
              </button>
            </div>
          )}
        </div>
        <div class="modal-bg" ref={el => (this.modalBackground = el as HTMLDivElement)} onClick={() => this.closeModal()}></div>
        <div id="tooltip" ref={el => (this.el_ToolTip = el as HTMLDivElement)}>
          <l-row justifyContent="space-between" align="center">
            <e-text variant="heading">{this.tooltipTitle}</e-text>
            <button onClick={() => this.handleButtonClick('hideTooltip')} class="control-button">
              <ph-x-circle size={this.iconSize} />
            </button>
          </l-row>
          <l-spacer value={0.5}></l-spacer>
          <e-text>{this.tooltipDescription}</e-text>
          <l-spacer value={0.5}></l-spacer>
          <e-button>Read More</e-button>
        </div>
        {this.isModalVisible && <this.Modal></this.Modal>}
        {this.isDemoStarted && <this.FilterContainer></this.FilterContainer>}
        {this.cardStack.length > 0 && this.isDemoStarted ? <this.LeftBar></this.LeftBar> : ''}
        <svg onClick={() => this.handleBodyClick()} width={this.width} height={this.height} ref={el => (this.el_Svg = el as SVGAElement)}></svg>
        <footer>
          <button class="query-button">
            <ph-question size={this.iconSizeBig}></ph-question>
          </button>
        </footer>
      </Host>
    );
  }
}

injectHistory(VProto);
