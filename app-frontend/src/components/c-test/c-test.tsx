import { Component, Host, h } from '@stencil/core';
import * as jsonld from 'jsonld';

@Component({
  tag: 'c-test',
  styleUrl: 'c-test.css',
  shadow: true,
})
export class CTest {
  private jsonld_Flattened: any;

  componentDidLoad() {
    this.fetch_ViewData();
  }

  async fetch_ViewData() {
    let url: string = document.domain === 'localhost' ? 'http://localhost:3334' : 'https://app-api.audit4sg.org';
    let options: any = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    await fetch(url, options)
      .then(response => response.json())
      .then(async data => {
        this.process_Jsonld(JSON.parse(data.payload));
      })
      .catch(error => {
        console.log(error);
      });
  }

  async process_Jsonld(data_JSONLD: any) {
    this.jsonld_Flattened = await jsonld.flatten(data_JSONLD);
    console.log(this.jsonld_Flattened);
    // this.get_Classes();
    // this.generate_Nodes();
    // this.generate_Links();
    // this.generate_TopNodes();
    // this.generate_ObjectLinks();
  }

  render() {
    return (
      <Host>
        <p>Test</p>
      </Host>
    );
  }
}
