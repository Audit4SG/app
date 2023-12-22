import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-init',
  styleUrl: 'v-init.css',
  shadow: true,
})
export class VInit {
  render() {
    return (
      <Host>
        <p>Init</p>
      </Host>
    );
  }
}
