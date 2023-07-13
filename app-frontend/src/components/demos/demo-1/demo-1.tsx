import { Component, Host, h } from '@stencil/core';
import * as d3 from 'd3';

@Component({
  tag: 'demo-1',
  styleUrl: 'demo-1.css',
  shadow: true,
})
export class Demo1 {
  el_Svg!: SVGElement;

  private svg: any;
  private width = window.innerWidth;
  private height = window.innerHeight;
  private nodeElements: any;
  private linkElements: any;
  private textElements: any;
  // private nodes: any = [
  //   { id: 'mammal', group: 0, label: 'Mammals', level: 1 },
  //   { id: 'dog', group: 0, label: 'Dogs', level: 2 },
  //   { id: 'cat', group: 0, label: 'Cats', level: 2 },
  //   { id: 'fox', group: 0, label: 'Foxes', level: 2 },
  //   { id: 'elk', group: 0, label: 'Elk', level: 2 },
  //   { id: 'insect', group: 1, label: 'Insects', level: 1 },
  //   { id: 'ant', group: 1, label: 'Ants', level: 2 },
  //   { id: 'bee', group: 1, label: 'Bees', level: 2 },
  //   { id: 'fish', group: 2, label: 'Fish', level: 1 },
  //   { id: 'carp', group: 2, label: 'Carp', level: 2 },
  //   { id: 'pike', group: 2, label: 'Pikes', level: 2 },
  // ];
  private nodes: any = [
    { id: 'mammal', label: 'Mammals' },
    { id: 'dog', label: 'Dogs' },
    { id: 'cat', label: 'Cats' },
    { id: 'fox', label: 'Foxes' },
    { id: 'elk', label: 'Elk' },
    { id: 'insect', label: 'Insects' },
    { id: 'ant', label: 'Ants' },
    { id: 'bee', label: 'Bees' },
    { id: 'fish', label: 'Fish' },
    { id: 'carp', label: 'Carp' },
    { id: 'pike', label: 'Pikes' },
  ];

  private links = [
    { target: 'mammal', source: 'dog', strength: 0.1 },
    { target: 'mammal', source: 'cat', strength: 0.1 },
    { target: 'mammal', source: 'fox', strength: 0.1 },
    { target: 'mammal', source: 'elk', strength: 0.1 },
    { target: 'insect', source: 'ant', strength: 0.1 },
    { target: 'insect', source: 'bee', strength: 0.1 },
    { target: 'fish', source: 'carp', strength: 0.1 },
    { target: 'fish', source: 'pike', strength: 0.1 },
    { target: 'cat', source: 'elk', strength: 0.1 },
    { target: 'carp', source: 'ant', strength: 0.1 },
    { target: 'elk', source: 'bee', strength: 0.1 },
    { target: 'dog', source: 'cat', strength: 0.1 },
    { target: 'fox', source: 'ant', strength: 0.1 },
    { target: 'pike', source: 'dog', strength: 0.1 },
  ];

  componentDidLoad() {
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
      .force('charge', d3.forceManyBody().strength(-120))
      .force('center', d3.forceCenter(this.width / 2, this.height / 2));

    var dragDrop = d3
      .drag()
      .on('start', function (node) {
        node.fx = node.x;
        node.fy = node.y;
      })
      .on('drag', function (event, node: any) {
        simulation.alphaTarget(0.7).restart();
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
      .attr('font-size', 15)
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
