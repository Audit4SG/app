import { Component, Host, h } from '@stencil/core';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin);

import * as jsonld from 'jsonld';
import * as d3 from 'd3';

@Component({
  tag: 'demo-9',
  styleUrl: 'demo-9.css',
  shadow: true,
})
export class Demo9 {
  el_Svg!: SVGElement;

  private svg: any;
  private svgContent: any;
  private svgGraph: any;

  private width = window.innerWidth;
  private height = window.innerHeight;
  private nodeElements: any;
  private linkElements: any;
  private textElements: any;

  private class_Pure: any = [];
  private nodes: any = [];
  private links: any = [];

  private jsonld_Flattened: any;

  componentDidLoad() {
    gsap.to(window, { duration: 0.1, scrollTo: { y: this.height / 2, x: this.width / 2 } });
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
    this.generate_Graph();
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
    this.svg = d3.select(this.el_Svg).call(
      d3.zoom().on('zoom', (event: any) => {
        console.log(event.transform.k);
        this.svgContent.attr('transform', event.transform);
      }),
    );

    this.svgContent = this.svg.append('g');
    this.svgGraph = this.svgContent.append('g');

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
      .force('charge', d3.forceManyBody().strength(-500))
      .force('center', d3.forceCenter(this.width / 2, this.height / 2));

    // var dragDrop = d3
    //   .drag()
    //   .on('start', function (node) {
    //     node.fx = node.x;
    //     node.fy = node.y;
    //   })
    //   .on('drag', function (event, node: any) {
    //     simulation.alphaTarget(0.8).restart();
    //     node.fx = event.x;
    //     node.fy = event.y;
    //   })
    //   .on('end', function (event, node: any) {
    //     if (!event.active) {
    //       simulation.alphaTarget(0);
    //     }
    //     node.fx = null;
    //     node.fy = null;
    //   });

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
      .attr('r', 15)
      .attr('fill', 'gray')
      .on('mouseenter', (event, data) => {
        console.log(event);
        this.highlightNode(data);
      })
      .on('mouseout', (event, data) => {
        console.log(event);
        this.unHighlightNode(data);
      });

    this.linkElements = this.svgGraph
      .append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(this.links)
      .enter()
      .append('line')
      .attr('stroke-width', 0.75)
      .attr('stroke', 'gray');

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
    selected_Node.transition().duration(150).attr('fill', 'black').attr('r', 20);
  }

  unHighlightNode(data) {
    let selected_Node = this.svg.select(`#${data.id.split('#')[1]}`);
    selected_Node.transition().duration(150).attr('fill', 'gray').attr('r', 15);
  }

  render() {
    return (
      <Host>
        <svg width={this.width} height={this.height} ref={el => (this.el_Svg = el as SVGAElement)}></svg>
      </Host>
    );
  }
}
