import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'demo-20-reading',
  styleUrl: 'demo-20-reading.css',
  shadow: true,
})
export class Demo20Reading {
  render() {
    return (
      <Host>
        <p>demo 20 reading</p>
      </Host>
    );
  }
}
