import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'p-search',
  styleUrl: 'p-search.css',
  shadow: true,
})
export class PSearch {
  render() {
    return <Host>Search box</Host>;
  }
}
