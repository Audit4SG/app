import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-reading',
  styleUrl: 'v-reading.css',
  shadow: true,
})
export class VReading {
  render() {
    return (
      <Host>
        <p>Reading</p>
      </Host>
    );
  }
}
