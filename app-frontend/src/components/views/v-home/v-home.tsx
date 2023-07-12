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
          <br/>
          <h1>Demos</h1>
          <ul>
            <li>
              <e-text><strong>1. Visualizes the pizza ontology as a force-directed graph</strong></e-text>
              <l-spacer value={0.5}></l-spacer>
              <stencil-route-link url="/demo-1">View Demo</stencil-route-link>
            </li>
          </ul>
      </Host>
    );
  }
}
