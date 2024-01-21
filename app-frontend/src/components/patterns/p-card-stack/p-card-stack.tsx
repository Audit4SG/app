import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'p-card-stack',
  styleUrl: 'p-card-stack.css',
  shadow: true,
})
export class PCardStack {
  render() {
    return <Host>Card Stack</Host>;
  }
}
