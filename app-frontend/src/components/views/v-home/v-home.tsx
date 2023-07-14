import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-home',
  styleUrl: 'v-home.css',
  shadow: true,
})
export class VHome {
  render() {
    return (
      <Host>
        <br />
        <h1>Demos</h1>
        <ul>
          <li>
            <e-text>
              <strong>D02. Interaction with graph nodes (data extraction)</strong>
              <br />
              Clicking on the nodes extracts information about that node, which can then be processed further
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
