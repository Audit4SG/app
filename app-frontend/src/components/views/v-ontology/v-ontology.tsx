import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-ontology',
  styleUrl: 'v-ontology.css',
  shadow: true,
})
export class VOntology {
  render() {
    return (
      <Host>
        <p>Ontology</p>
      </Host>
    );
  }
}
