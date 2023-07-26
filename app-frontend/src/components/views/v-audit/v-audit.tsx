import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-audit',
  styleUrl: 'v-audit.css',
  shadow: true,
})
export class VAudit {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
