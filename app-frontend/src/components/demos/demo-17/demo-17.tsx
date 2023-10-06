import { Component, Host, h } from '@stencil/core';
import instantsearch from 'instantsearch.js';
import { searchBox, hits } from 'instantsearch.js/es/widgets';
import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';
// import * as jsonld from 'jsonld';

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: 'xyz', // Be sure to use the search-only-api-key
    nodes: [
      {
        host: 'localhost',
        port: 8108,
        protocol: 'http',
      },
    ],
  },
  // The following parameters are directly passed to Typesense's search API endpoint.
  //  So you can pass any parameters supported by the search endpoint below.
  //  queryBy is required.
  additionalSearchParameters: {
    query_by: 'title,authors',
  },
});

const searchClient = typesenseInstantsearchAdapter.searchClient;

@Component({
  tag: 'demo-17',
  styleUrl: 'demo-17.css',
  shadow: true,
})
export class Demo17 {
  searchBoxEl!: HTMLDivElement;
  hitsEl!: HTMLDivElement;

  private search = instantsearch({
    searchClient,
    indexName: 'audit4sg_demo_search',
  });

  componentDidLoad() {
    // this.fetch_ViewData();
  }

  // private jsonld_Flattened: any;
  // private class_Pure: any = [];
  // async fetch_ViewData() {
  //   let url: string = document.domain === 'localhost' ? 'http://localhost:3334' : 'https://app-api.audit4sg.org';
  //   let options: any = {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };
  //   await fetch(url, options)
  //     .then(response => response.json())
  //     .then(async data => {
  //       this.process_Jsonld(JSON.parse(data.payload));
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  // async process_Jsonld(data_JSONLD: any) {
  //   this.jsonld_Flattened = await jsonld.flatten(data_JSONLD);
  //   this.get_Classes();
  // }

  // get_Classes() {
  //   let class_Pure_Raw: any = [];
  //   let class_Blank_Raw: any = [];

  //   this.jsonld_Flattened.map((item: any) => {
  //     let array_Type = item['@type'];
  //     let id = item['@id'];
  //     if (array_Type.length === 1) {
  //       let str_Type = array_Type[0].split('#')[1];
  //       if (str_Type === 'Class') {
  //         if (id.includes('_:b')) {
  //           class_Blank_Raw.push(item);
  //         } else {
  //           class_Pure_Raw.push(item);
  //         }
  //       }
  //     }
  //   });

  //   class_Pure_Raw.map((item: any) => {
  //     let id = '';
  //     let label = '';

  //     id = item['@id'];
  //     label = id.split('#')[1];

  //     let obj = {
  //       label: label,
  //       type: 'Class',
  //     };
  //     this.class_Pure.push(obj);
  //   });
  //   console.log(this.class_Pure);
  // }

  initTypeSense() {
    this.search.addWidgets([
      searchBox({
        container: this.searchBoxEl,
      }),
      hits({
        container: this.hitsEl,
      }),
    ]);

    this.search.start();
  }

  render() {
    return (
      <Host>
        <span>TypeSense</span>
        <div ref={el => (this.searchBoxEl = el as HTMLDivElement)}></div>
        <div ref={el => (this.hitsEl = el as HTMLDivElement)}></div>
      </Host>
    );
  }
}
