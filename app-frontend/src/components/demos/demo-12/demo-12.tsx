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
  @State() isStarted: boolean = false;
  @State() isStartButtonDisabled: boolean = false;

  @Listen('buttonClick') buttonClick(e) {
    if (e.detail.action === 'Next') {
      this.modalStep = this.modalStep + 1;
      this.isStartButtonDisabled = true;
    } else if (e.detail.action === 'Back') {
      this.modalStep = this.modalStep - 1;
      this.isStartButtonDisabled = false;
    } else if (e.detail.action === 'Start') {
      this.isStarted = true;
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
      this.selectedTopics.push(e.detail.value);

      if (this.selectedTopics.length > 0) {
        this.isStartButtonDisabled = false;
      }
    }
  }

  private nodeElements: any;
  private linkElements: any;
  private textElements: any;
  private descriptionElements: any;

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
            strength: 0.1,
          };
          this.links.push(obj);
        }
      });
    });
  }

  generate_Graph() {
    gsap.to(window, { duration: 0.1, scrollTo: { y: this.height / 2, x: this.width / 2 } });

    this.svg = d3.select(this.el_Svg).call(
      d3.zoom().on('zoom', (event: any) => {
        this.svgContent.attr('transform', event.transform);
      }),
    );

    this.svgContent = this.svg.append('g');
    this.svgGraph = this.svgContent.append('g');

    // var linkForce = d3
    //   .forceLink()
    //   .id(function (link: any) {
    //     return link.id;
    //   })
    //   .strength(function (link: any) {
    //     return link.strength;
    //   });

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

    // this.nodeElements = this.svgContent
    //   .append('g')
    //   .attr('class', 'nodes')
    //   .selectAll('circle')
    //   .data(this.nodes)
    //   .enter()
    //   .append('circle')
    //   .attr('r', 10)
    //   .attr('fill', 'gray')
    //   .call(dragDrop);

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
      .attr('fill', 'gray')
      .call(dragDrop);

    if (this.selectedTopics.length > 0) {
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
        .attr('fill', '#d9d9d9')
        .call(dragDrop);
      this.linkElements = this.svgGraph
        .append('g')
        .attr('class', 'links')
        .selectAll('line')
        .data(this.links)
        .enter()
        .append('line')
        .attr('stroke-width', 5)
        .attr('id', link => {
          return `${link.source.split('#')[1]}-${link.target.split('#')[1]}`;
        })
        .attr('stroke', '#d9d9d9');

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
        .attr('font-size', 18)
        .style('fill', '#d9d9d9')
        .attr('dx', 60)
        .attr('dy', 4);

      this.descriptionElements = this.svgGraph
        .append('g')
        .attr('class', 'texts')
        .selectAll('text')
        .data(this.nodes)
        .enter()
        .append('text')
        .text('Lorem Ipsum is simply dummy text')
        .attr('font-size', 1)
        .style('fill', '#d9d9d9')
        .attr('dx', -7.5)
        .attr('dy', 0);

      this.colorNodesAndEdges(this.selectedTopics);
    } else {
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
        .attr('fill', 'gray')
        .call(dragDrop);

      this.linkElements = this.svgGraph.append('g').attr('class', 'links').selectAll('line').data(this.links).enter().append('line').attr('stroke-width', 5).attr('stroke', 'gray');

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
        .attr('font-size', 18)
        .attr('dx', 60)
        .attr('dy', 4);

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
    }

    // this.nodeElements = this.svgGraph
    //   .append('g')
    //   .attr('class', 'nodes')
    //   .selectAll('circle')
    //   .data(this.nodes)
    //   .enter()
    //   .append('circle')
    //   .attr('id', node => {
    //     return node.id.split('#')[1];
    //   })
    //   .attr('r', 50)
    //   .attr('fill', 'gray');

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
    });

    simulation.force('link').links(this.links);
  }

  colorNodesAndEdges(topics: any) {
    topics.map((topic: any) => {
      this.svg.select(`#actor`).attr('fill', 'black').attr('class', 'selectedNodes');
      this.svg
        .select(`#${topic.split('#')[1]}`)
        .attr('fill', 'black')
        .attr('class', 'selectedNodes');
    });

    let links = [];
    topics.map((topic: any) => {
      let simpleTopic = topic.split('#')[1];
      this.links.map((link: any) => {
        let simpleTarget = link.target.split('#')[1];
        let simpleSource = link.source.split('#')[1];

        if (simpleTopic === simpleTarget || simpleTopic === simpleSource) {
          links.push(link);
        }
      });
    });

    links.map((link: any) => {
      this.svg
        .select(`#${link.source.split('#')[1]}-${link.target.split('#')[1]}`)
        .attr('stroke-width', 10)
        .attr('stroke', 'black');
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

  Modal: FunctionalComponent = () => (
    <div id="modal__container">
      <div id="modal__content">
        {this.modalStep === 0 && (
          <div>
            <e-text variant="heading">Choose your auditing journey</e-text>
            <br />
            <e-input type="radio" name="journey" value="selection" checked={this.journey === 'selection' ? true : false} label="I will audit certain topics"></e-input>
            <e-input type="radio" name="journey" value="exploration" checked={this.journey === 'exploration' ? true : false} label="I will explore"></e-input>
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
            <br />

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

  render() {
    return (
      <Host>
        {this.isModalVisible && <this.Modal></this.Modal>}
        <svg width={this.width} height={this.height} ref={el => (this.el_Svg = el as SVGAElement)}></svg>
      </Host>
    );
  }
}
