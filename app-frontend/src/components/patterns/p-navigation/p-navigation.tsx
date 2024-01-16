import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'p-navigation',
  styleUrl: 'p-navigation.css',
  shadow: true,
})
export class PNavigation {
  render() {
    return (
      <Host>
        <e-text>Navigation</e-text>
      </Host>
    );
  }
}
