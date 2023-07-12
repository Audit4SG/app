import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'demo-1',
  styleUrl: 'demo-1.css',
  shadow: true,
})
export class Demo1 {

  render() {
    return (
      <Host>
        <p>Demo 1</p>
      </Host>
    );
  }

}
