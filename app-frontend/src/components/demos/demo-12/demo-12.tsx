import { Component, Host, FunctionalComponent, State, Listen, h } from '@stencil/core';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin);

import * as jsonld from 'jsonld';
import * as d3 from 'd3';

@Component({
  tag: 'demo-12',
  styleUrl: 'demo-12.css',
  shadow: true,
})
export class Demo12 {
  el_Svg!: SVGElement;

  private svg: any;
  private svgContent: any;
  private svgGraph: any;

  private width = window.innerWidth;
  private height = window.innerHeight;

  @State() isModalVisible: boolean = false;
  @State() journey: string = 'selection';
  @State() modalStep: number = 0;
  @State() isDemoStarted: boolean = false;
  @State() isStartButtonDisabled: boolean = false;

  @Listen('buttonClick') buttonClick(e) {
    if (e.detail.action === 'Next') {
      this.modalStep = this.modalStep + 1;
      this.isStartButtonDisabled = true;
    } else if (e.detail.action === 'Back') {
      this.modalStep = this.modalStep - 1;
      this.isStartButtonDisabled = false;
    } else if (e.detail.action === 'Start') {
      this.isDemoStarted = true;
      this.isModalVisible = false;
      this.generate_Graph();
    }
  }

  @Listen('radioInput') handle_RadioInput(e) {
    if (e.detail.name === 'journey') {
      this.journey = e.detail.value;
    }
  }

  @Listen('checkboxInput') handle_CheckboxInput(e) {
    if (e.detail.name === 'topics') {
      if (e.detail.action === 'add') {
        if (this.isDemoStarted) {
          this.highlightNode(e.detail.value);
          this.highlightEdge(e.detail.value);
        }
        this.selectedTopics.push(e.detail.value);
      } else if (e.detail.action === 'remove') {
        if (this.isDemoStarted) {
          this.unhilightNode(e.detail.value);
          this.unhighlightEdge(e.detail.value);
        }
        this.selectedTopics = this.selectedTopics.filter(topic => topic !== e.detail.value);
      }
      this.checkStartButtonState();
    }
  }

  @Listen('event_LinkClick') handle_LinkClick(e) {
    if (e.detail.action === 'flyTo') {
      this.flyTo(e.detail.value);
    }
  }

  checkStartButtonState() {
    if (this.selectedTopics.length > 0) {
      this.isStartButtonDisabled = false;
    } else {
      this.isStartButtonDisabled = true;
    }
  }

  private nodeElements: any;
  private linkElements: any;
  private textElements: any;
  private descriptionElements: any;
  private linkLabels: any;

  private selectedTopics: any = [];
  private topicOptions: any = [];

  private class_Pure: any = [];
  private nodes: any = [];
  private links: any = [];

  private jsonld_Flattened: any;

  componentWillLoad() {
    this.isModalVisible = true;
  }

  componentDidLoad() {
    this.fetch_ViewData();
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

      let obj = {
        id: id,
        label: label,
        subClassOf: subClassOf,
      };
      this.class_Pure.push(obj);
    });
  }

  generate_Nodes() {
    this.class_Pure.map((item: any) => {
      let obj = {
        id: item.id,
        label: item.label,
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
          // console.log(`${obj.source} - ${obj.label} - ${obj.target} `);
          this.links.push(obj);
        }
      }
    });
  }

  private zoom: any;

  generate_Graph() {
    gsap.to(window, { duration: 0.1, scrollTo: { y: this.height / 2, x: this.width / 2 } });

    this.zoom = d3.zoom().on('zoom', (event: any) => {
      this.svgContent.attr('transform', event.transform);
    });
    this.svg = d3.select(this.el_Svg).call(this.zoom);

    this.svgContent = this.svg.append('g');
    this.svgGraph = this.svgContent.append('g');

    // var simulation: any = d3
    //   .forceSimulation()
    //   .force('link', linkForce)
    //   .force('charge', d3.forceManyBody().strength(-2000))
    //   .force('center', d3.forceCenter(this.width / 2, this.height / 2));

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
      .call(dragDrop);

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

    this.descriptionElements = this.svgGraph
      .append('g')
      .attr('class', 'texts')
      .selectAll('text')
      .data(this.nodes)
      .enter()
      .append('text')
      .text('Lorem Ipsum is simply dummy text')
      .attr('font-size', 1)
      .attr('dx', -7.5)
      .attr('dy', 0);

    // this.linkLabels = this.svg
    //   .append('g')
    //   .attr('class', 'edge-texts')
    //   .selectAll('text')
    //   .data(this.links)
    //   .enter()
    //   .append('text')
    //   .text(link => {
    //     console.log(link.label);
    //     return link.label;
    //   })
    //   .attr('font-size', 12)
    //   .attr('dx', 5)
    //   .attr('dy', 5);

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
      this.descriptionElements
        .attr('x', function (node) {
          return node.x;
        })
        .attr('y', function (node) {
          return node.y;
        });
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
  }

  highlightNodes() {
    this.selectedTopics.map((selectedTopic: any) => {
      let selected_Node = this.svg.select(`#${selectedTopic.split('#')[1]}`);
      selected_Node.attr('fill', 'rgba(8, 242, 110, 1)');
    });
  }

  highlightEdges() {
    let linkIdsForHighlight = [];
    this.selectedTopics.map((selectedTopic: any) => {
      this.links.map((link: any) => {
        if (selectedTopic === link.source.id || selectedTopic === link.target.id) {
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
    const selected_Node = this.svg.select(`#${topic.split('#')[1]}`);
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
      this.selectedTopics.map(selectedTopic => {
        if (selectedTopic === topic) {
          let selectedTopicNode = this.svg.select(`#${topic.split('#')[1]}`);
          selectedTopicNode.attr('fill', 'rgba(8, 242, 110, 1)');
        }
      });
    }, 2000);
  }

  Modal: FunctionalComponent = () => (
    <div id="modal__container">
      <div id="modal__content">
        {this.modalStep === 0 && (
          <div>
            <e-text variant="heading">Choose your auditing journey</e-text>
            <br />
            <e-input type="radio" name="journey" value="selection" checked={this.journey === 'selection' ? true : false} label="I will audit certain topics"></e-input>
            <e-input type="radio" name="journey" value="exploration" checked={this.journey === 'exploration' ? true : false} label="I will explore all the topics"></e-input>
            <br />
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

            {this.topicOptions.map((topic: any) => (
              <e-input type="checkbox" name="topics" value={topic.value} checked={false} label={topic.label}></e-input>
            ))}
            <br />
            <l-row justifyContent="space-between">
              <e-button action="Back">Back</e-button>
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

  FilterContainer: FunctionalComponent = () => (
    <div class="filter-container">
      {' '}
      {this.topicOptions.map((topic: any) => (
        <l-row justifyContent="space-between">
          <e-input type="checkbox" name="topics" value={topic.value} checked={this.isSelected(topic.value)} label={topic.label}></e-input>
          <e-link event={true} action="flyTo" value={topic.value}>
            <ion-icon name="location-outline"></ion-icon>
          </e-link>
        </l-row>
      ))}
    </div>
  );

  isSelected(topicToCheck) {
    let isSelected: boolean = false;
    this.selectedTopics.map(topic => {
      if (topic === topicToCheck) {
        isSelected = true;
      }
    });
    return isSelected;
  }

  render() {
    return (
      <Host>
        {this.isModalVisible && <this.Modal></this.Modal>}
        {this.journey === 'selection' && this.isDemoStarted && <this.FilterContainer></this.FilterContainer>}
        <svg width={this.width} height={this.height} ref={el => (this.el_Svg = el as SVGAElement)}></svg>
      </Host>
    );
  }
}
