import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'demo-2',
  styleUrl: 'demo-2.css',
  shadow: true,
})
export class Demo2 {
  componentDidLoad() {
    this.fetch_ViewData();
  }

  async fetch_ViewData() {
    let url: string = `http://localhost:4444`;
    let options: any = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    await fetch(url, options)
      .then(response => response.json())
      .then(data => {
        console.log(data.payload);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Host>
        <p>Demo 2</p>
      </Host>
    );
  }
}
