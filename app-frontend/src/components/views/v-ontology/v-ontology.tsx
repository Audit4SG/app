import { Component, Prop, Host, h } from '@stencil/core';
import { injectHistory, RouterHistory } from '@stencil/router';
import { state } from '../../../global/script';

@Component({
  tag: 'v-ontology',
  styleUrl: 'v-ontology.css',
  shadow: true,
})
export class VOntology {
  @Prop() history: RouterHistory;

  componentWillLoad() {
    if (!state.isInitialized) {
      this.history.push('/ontology', {});
    }
  }

  render() {
    return (
      <Host>
        <p>Ontology</p>
      </Host>
    );
  }
}

injectHistory(VOntology);
