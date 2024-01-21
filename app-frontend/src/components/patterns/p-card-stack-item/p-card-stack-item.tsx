import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'p-card-stack-item',
  styleUrl: 'p-card-stack-item.css',
  shadow: true,
})
export class PCardStackItem {
  render() {
    return <Host>Card Stack Item</Host>;
  }
}
