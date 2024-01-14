import { Component, Prop, Host, h } from '@stencil/core';
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

  @Prop() history: RouterHistory;

  private svg: any;
  private graphContainer: any;
  private graph: any;

  private nodeElements: any;
  private nodeRelationElements: any;
  private textElements: any;
  private relationLabels: any;

  private svgHeight: number;
  private svgWidth: number;
  private cardStack: any;
  private nodes: any;
  private nodeRelations: any;
  private zoom: any;

  componentWillLoad() {
    if (!state.isInitialized) {
      this.history.push('/', {});
    }
    this.svgHeight = window.innerHeight;
    this.svgWidth = window.innerWidth;
  }

  componentDidLoad() {
    this.nodes = JSON.parse(state.nodes);
    this.nodeRelations = JSON.parse(state.nodeRelations);
    if (state.cardStack.length > 0) {
      this.cardStack = JSON.parse(state.cardStack);
    }
    this.generateGraph();
  }

  generateGraph() {
    gsap.to(window, { duration: 0.1, scrollTo: { y: this.svgHeight / 2, x: this.svgWidth / 2 } });
    this.zoom = d3.zoom().on('zoom', (event: any) => {
      this.graphContainer.attr('transform', event.transform);
    });
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
      .attr('stroke', 'rgb(1, 30, 43)');

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
        // this.nodeHoverHighlight(data);
        // this.timeout = setTimeout(() => {
        //   this.showTooltip(data.id.split('#')[1], data.description, event);
        // }, this.timeoutInMS);
      })
      .on('mouseout', (event, data) => {
        event.preventDefault();
        // this.nodeHoverUnhighlight(data);
        // clearTimeout(this.timeout);
      })
      .on('dragstart', event => {
        event.preventDefault();
        // clearTimeout(this.timeout);
      })
      .on('click', (event, data) => {
        event.preventDefault();
        // clearTimeout(this.timeout);
        let selected_Node = this.svg.select(`#${data.id.split('#')[1]}`);
        if (selected_Node.attr('fill') === 'white') {
          // this.highlightNode(data.id);
          // this.addToCardStack(data);
        } else if (selected_Node.attr('fill') === 'rgba(8, 242, 110, 1)') {
          // this.unhilightNode(data.id);
          // this.removeFromCardStack(data);
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

  handleBodyClick() {}

  render() {
    return (
      <Host>
        <svg height={this.svgHeight} width={this.svgWidth} ref={el => (this.svgEl = el as SVGElement)} onClick={() => this.handleBodyClick()}></svg>
      </Host>
    );
  }
}

injectHistory(VOntology);
