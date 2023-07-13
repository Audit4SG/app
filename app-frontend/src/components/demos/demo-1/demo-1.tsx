import { Component, Host, h } from '@stencil/core';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin);

import * as jsonld from 'jsonld';
import * as d3 from 'd3';

@Component({
  tag: 'demo-1',
  styleUrl: 'demo-1.css',
  shadow: true,
})
export class Demo1 {
  el_Svg!: SVGElement;

  private svg: any;
  private width = window.innerWidth * 3;
  private height = window.innerHeight * 3;
  private nodeElements: any;
  private linkElements: any;
  private textElements: any;

  private class_Pure: any = [];
  private class_Blank: any = [];
  private nodes: any = [];
  private links: any = [];

  private jsonld_Flattened: any;

  componentWillLoad() {}

  componentDidLoad() {
    gsap.to(window, { duration: 0.1, scrollTo: { y: this.height / 3, x: this.width / 3 } });
    this.fetch_ViewData();
  }

  async fetch_ViewData() {
    let url: string = `http://localhost:4444`;
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
            strength: 0.1,
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
      .attr('r', 10)
      .attr('fill', this.getNodeColor)
      .call(dragDrop)
      .on('click', this.selectNode);

    this.linkElements = this.svg
      .append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(this.links)
      .enter()
      .append('line')
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

  getNeighbors(node) {
    return this.links.reduce(
      function (neighbors: any, link: any) {
        if (link.target.id === node.id) {
          neighbors.push(link.source.id);
        } else if (link.source.id === node.id) {
          neighbors.push(link.target.id);
        }
        return neighbors;
      },
      [node.id],
    );
  }

  isNeighborLink(node, link) {
    return link.target.id === node.id || link.source.id === node.id;
  }

  getNodeColor(node, neighbors) {
    if (Array.isArray(neighbors) && neighbors.indexOf(node.id) > -1) {
      return node.level === 1 ? 'blue' : 'green';
    }

    return node.level === 1 ? 'red' : 'gray';
  }

  getLinkColor(node, link) {
    return this.isNeighborLink(node, link) ? 'green' : '#E5E5E5';
  }

  getTextColor(node, neighbors) {
    return Array.isArray(neighbors) && neighbors.indexOf(node.id) > -1 ? 'green' : 'black';
  }

  selectNode(selectedNode) {
    var neighbors = this.getNeighbors(selectedNode);

    // we modify the styles to highlight selected nodes
    this.nodeElements.attr('fill', function (node) {
      return this.getNodeColor(node, neighbors);
    });
    this.textElements.attr('fill', function (node) {
      return this.getTextColor(node, neighbors);
    });
    this.linkElements.attr('stroke', function (link) {
      return this.getLinkColor(selectedNode, link);
    });
  }

  render() {
    return (
      <Host>
        <svg width={this.width} height={this.height} ref={el => (this.el_Svg = el as SVGAElement)}></svg>
      </Host>
    );
  }
}
