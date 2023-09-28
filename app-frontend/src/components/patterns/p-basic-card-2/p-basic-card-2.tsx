import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'p-basic-card-2',
  styleUrl: 'p-basic-card-2.css',
  shadow: true,
})
export class PBasicCard2 {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
