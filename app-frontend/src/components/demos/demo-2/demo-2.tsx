import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'demo-2',
  styleUrl: 'demo-2.css',
  shadow: true,
})
export class Demo2 {

  render() {
    return (
      <Host>
         <p>Demo 2</p>
      </Host>
    );
  }

}
