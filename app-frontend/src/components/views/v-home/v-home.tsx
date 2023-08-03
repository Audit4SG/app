import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'v-home',
  styleUrl: 'v-home.css',
  shadow: true,
})
export class VHome {
  @State() list: any = [];

  render() {
    return (
      <Host>
        <br />
        <h1>Demos</h1>
        <ul>
          <li>
            <e-text>
              {/* <strong>D06. Graph node selection + information display (Part-2)</strong>
              <br />
              Everything in D04 + List item collapses when more than 5 nodes are selected + Includes an expanded view */}
              <strong>D06. Graph & Tree</strong>
              <br />
              Switch between Graph view and Tree view to explore the ontology. It is based on D01, and is meant to experience the "view switching". This demo does not include any
              node interactions.
            </e-text>
            <l-spacer value={0.5}></l-spacer>
            <stencil-route-link url="/demo-6">View Demo</stencil-route-link>
          </li>
          <li>
            <e-text>
              <strong>D05. Graph node selection + information display (Part-2)</strong>
              <br />
              Everything in D04 + Node list collapses when more than 5 nodes are selected + Includes an expanded view to glance over the contents of selected nodes
            </e-text>
            <l-spacer value={0.5}></l-spacer>
            <stencil-route-link url="/demo-5">View Demo</stencil-route-link>
          </li>
          <li>
            <e-text>
              <strong>D04. Graph node selection + information display (Part-1)</strong>
              <br />
              Select/deselect graph nodes by <u>double clicking</u>. Selected nodes are highlighted in red. Information about selected nodes is displayed in a panel (on the left)
            </e-text>
            <l-spacer value={0.5}></l-spacer>
            <stencil-route-link url="/demo-4">View Demo</stencil-route-link>
          </li>
          <li>
            <e-text>
              <strong>D03. Graph labels inside nodes</strong>
              <br />
              Node labels are displayed inside flexible-width rectangular nodes
            </e-text>
            <l-spacer value={0.5}></l-spacer>
            <stencil-route-link url="/demo-3">View Demo</stencil-route-link>
          </li>
          <li>
            <e-text>
              <strong>D02. Interaction with graph nodes</strong>
              <br />
              Clicking on graph nodes extracts information about the node and is displayed in an <em>alert</em> modal
            </e-text>
            <l-spacer value={0.5}></l-spacer>
            <stencil-route-link url="/demo-2">View Demo</stencil-route-link>
          </li>
          <li>
            <e-text>
              <strong>D01. Basic graph visualization</strong>
              <br />
              The <em>class hierarchy</em> of <a href="https://protege.stanford.edu/ontologies/pizza/pizza.owl">pizza ontology</a> is visualised as a force-directed graph (Nodes
              are non-interactive)
            </e-text>
            <l-spacer value={0.5}></l-spacer>
            <stencil-route-link url="/demo-1">View Demo</stencil-route-link>
          </li>
        </ul>
      </Host>
    );
  }
}
