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
            <e-text>2. Implements pizza ontology as force-directed graph</e-text>
            <l-spacer value={0.5}></l-spacer>
            <stencil-route-link url="/demo-2">View Demo</stencil-route-link>
          </li>
          <li>
            <e-text>1. Implements a basic force-directed graph</e-text>
            <l-spacer value={0.5}></l-spacer>
            <stencil-route-link url="/demo-1">View Demo</stencil-route-link>
          </li>
        </ul>
      </Host>
    );
  }
}
