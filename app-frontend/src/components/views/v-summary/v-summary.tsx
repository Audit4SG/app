import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-summary',
  styleUrl: 'v-summary.css',
  shadow: true,
})
export class VSummary {
  render() {
    return (
      <Host>
        <e-text>Summary</e-text>
      </Host>
    );
  }
}
