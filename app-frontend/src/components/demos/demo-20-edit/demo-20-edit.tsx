import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'demo-20-edit',
  styleUrl: 'demo-20-edit.css',
  shadow: true,
})
export class Demo20Edit {
  render() {
    return (
      <Host>
        <p>demo-20-edit</p>
      </Host>
    );
  }
}
