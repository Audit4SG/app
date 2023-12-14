import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'demo-20-export',
  styleUrl: 'demo-20-export.css',
  shadow: true,
})
export class Demo20Export {
  render() {
    return (
      <Host>
        <p>demo 20 export</p>
      </Host>
    );
  }
}
