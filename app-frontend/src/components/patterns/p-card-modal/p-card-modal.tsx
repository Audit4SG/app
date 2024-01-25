import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'p-card-modal',
  styleUrl: 'p-card-modal.css',
  shadow: true,
})
export class PCardModal {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
