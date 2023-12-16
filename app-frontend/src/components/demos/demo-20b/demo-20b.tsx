import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'demo-20b',
  styleUrl: 'demo-20b.css',
  shadow: true,
})
export class Demo20b {
  render() {
    return <Host>Reading</Host>;
  }
}
