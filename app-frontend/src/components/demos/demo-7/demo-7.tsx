import { Component, State, Host, h } from '@stencil/core';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin);

import * as jsonld from 'jsonld';
import * as d3 from 'd3';

@Component({
  tag: 'demo-7',
  styleUrl: 'demo-7.css',
  shadow: true,
})
export class Demo7 {
  el_Svg!: SVGElement;
  el_ToolTip!: HTMLDivElement;

  @State() tooltipContent: string;

  private svg: any;
  private width = window.innerWidth * 3;
  private height = window.innerHeight * 3;
  private nodeElements: any;
  private linkElements: any;
  private textElements: any;

  private class_Pure: any = [];
  // private class_Blank: any = [];
  private nodes: any = [];
  private links: any = [];

  private jsonld_Flattened: any;

  componentDidLoad() {
    gsap.to(window, { duration: 0.1, scrollTo: { y: this.height / 3, x: this.width / 3 } });
    this.fetch_ViewData();

    this.initToolTip();
  }

  async fetch_ViewData() {
    let url: string = document.domain === 'localhost' ? 'http://localhost:4444' : 'https://demos-api.audit4sg.org';
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
    this.generate_Graph();
  }

  get_Classes() {
    //Extract the Class Objects
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
      let label_Pref = '';
      let subClassOf = '';

      id = item['@id'];
      let array_Label = item['http://www.w3.org/2000/01/rdf-schema#label'];
      array_Label.map((item: any) => {
        if (item['@language'] === 'en') {
          label = item['@value'];
        }
      });
      subClassOf = '';

      if (item['http://www.w3.org/2000/01/rdf-schema#subClassOf']) {
        subClassOf = item['http://www.w3.org/2000/01/rdf-schema#subClassOf'][0]['@id'];
      }

      let obj = {
        id: id,
        label: label,
        label_Pref: label_Pref,
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
            strength: 0.075,
          };
          this.links.push(obj);
        }
      });
    });
  }

  generate_Graph() {
    this.svg = d3.select(this.el_Svg);

    var linkForce = d3
      .forceLink()
      .id(function (link: any) {
        return link.id;
      })
      .strength(function (link: any) {
        return link.strength;
      });

    var simulation: any = d3
      .forceSimulation()
      .force('link', linkForce)
      .force('charge', d3.forceManyBody().strength(-100))
      .force('center', d3.forceCenter(this.width / 2, this.height / 2));

    var dragDrop = d3
      .drag()
      .on('start', function (node) {
        node.fx = node.x;
        node.fy = node.y;
      })
      .on('drag', function (event, node: any) {
        simulation.alphaTarget(0.8).restart();
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

    this.nodeElements = this.svg
      .append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(this.nodes)
      .enter()
      .append('circle')
      .attr('id', node => {
        return node.id.split('#')[1];
      })
      .attr('r', 10)
      .attr('fill', 'gray')
      .call(dragDrop)
      .on('mouseenter', (event, data) => {
        this.highlightNode(data);
        this.highlightLink(data);
        this.showToolTip(data.id, event);
      })
      .on('mouseout', (event, data) => {
        console.log(event);
        this.unHighlightNode(data);
        this.unHighlightLink();
        this.hideToolTip();
      });

    this.linkElements = this.svg
      .append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(this.links)
      .enter()
      .append('line')
      .attr('id', link => {
        return `${link.source.split('#')[1]}-${link.target.split('#')[1]}`;
      })
      .attr('stroke-width', 1)
      .attr('stroke', 'rgba(50, 50, 50, 0.2)');

    this.textElements = this.svg
      .append('g')
      .attr('class', 'texts')
      .selectAll('text')
      .data(this.nodes)
      .enter()
      .append('text')
      .text(function (node) {
        return node.label;
      })
      .attr('font-size', 12)
      .attr('dx', 15)
      .attr('dy', 4);

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
    });

    simulation.force('link').links(this.links);
  }

  highlightNode(data) {
    let selected_Node = this.svg.select(`#${data.id.split('#')[1]}`);
    selected_Node.transition().duration(150).attr('fill', 'black').attr('r', 12);
  }

  unHighlightNode(data) {
    let selected_Node = this.svg.select(`#${data.id.split('#')[1]}`);
    selected_Node.transition().duration(150).attr('fill', 'gray').attr('r', 10);
  }

  highlightLink(node) {
    let parents = this.getParents(node.id, []);
    let nodesForLinkHighlight = [];
    nodesForLinkHighlight.push(node.id);
    parents.map(parent => {
      nodesForLinkHighlight.push(parent);
    });
    let linkIdsForHighlight = [];
    for (let i = 0; i < nodesForLinkHighlight.length - 1; i++) {
      let link = `${nodesForLinkHighlight[i + 1].split('#')[1]}-${nodesForLinkHighlight[i].split('#')[1]}`;
      console.log(link);
      linkIdsForHighlight.push(link);
    }
    linkIdsForHighlight.map((linkId: any) => {
      this.svg.select(`#${linkId}`).attr('stroke-width', 3).attr('stroke', 'rgba(50, 50, 50, 0.2)');
    });
  }

  getParents(nodeId, parents) {
    if (nodeId) {
      let sourceId = '';
      this.links.map((link: any) => {
        if (link.target.id === nodeId) {
          sourceId = link.source.id;
          parents.push(sourceId);
        }
      });
      return this.getParents(sourceId, parents);
    } else {
      return parents;
    }
  }

  unHighlightLink() {
    this.svg.selectAll('line').attr('stroke-width', 1).attr('stroke', 'rgba(50, 50, 50, 0.2)');
  }

  initToolTip() {
    this.el_ToolTip.style.position = 'absolute';
    this.el_ToolTip.style.background = 'wheat';
    this.el_ToolTip.style.padding = '0.3em 0.6em';
    this.el_ToolTip.style.borderRadius = '0.25em';
    this.el_ToolTip.style.border = '1px solid rgba(0,0,0,0.2)';
    this.el_ToolTip.style.display = 'none';
    this.el_ToolTip.style.maxWidth = '200px';
    this.el_ToolTip.style.overflowWrap = 'break-word';
  }

  showToolTip(tooltipText: string, event: any) {
    this.tooltipContent = tooltipText;
    this.el_ToolTip.style.display = 'block';
    this.el_ToolTip.style.top = `${event.pageY + 20}px`;
    this.el_ToolTip.style.left = `${event.pageX - 100}px`;
  }

  hideToolTip() {
    this.el_ToolTip.style.display = 'none';
  }

  render() {
    return (
      <Host>
        <div ref={el => (this.el_ToolTip = el as HTMLDivElement)}>{this.tooltipContent}</div>
        <svg width={this.width} height={this.height} ref={el => (this.el_Svg = el as SVGAElement)}></svg>
      </Host>
    );
  }
}
