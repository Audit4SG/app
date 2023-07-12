import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'demo-3',
  styleUrl: 'demo-3.css',
  shadow: true,
})
export class Demo3 {

  render() {
    return (
      <Host>
        <p>Demo 3</p>
      </Host>
    );
  }

}
