import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'demo-12',
  styleUrl: 'demo-12.css',
  shadow: true,
})
export class Demo12 {
  render() {
    return <Host>Demo 12</Host>;
  }
}
