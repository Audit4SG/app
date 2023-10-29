import { Component, Host, h } from '@stencil/core';
import instantsearch from 'instantsearch.js';
import { searchBox, hits } from 'instantsearch.js/es/widgets';
import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';
import * as jsonld from 'jsonld';

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: 'Y58xEcn6fuPXAbtYl7p9Nb7NeEXupfiI',
    nodes: [
      {
        host: 'localhost',
        port: 8108,
        protocol: 'http',
      },
    ],
  },
  additionalSearchParameters: {
    query_by: 'type,value,definition,question,reference',
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
    indexName: 'relaio',
  });

  componentDidLoad() {
    this.fetch_ViewData();
  }

  private jsonld_Flattened: any;
  private typesenseData: any = [];
  private index: number = 0;

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
        this.initTypeSense();
      })
      .catch(error => {
        console.log(error);
      });
  }

  async process_Jsonld(data_JSONLD: any) {
    this.jsonld_Flattened = await jsonld.flatten(data_JSONLD);
    this.extractClasses();
    this.extractRelation();
  }

  extractClasses() {
    let class_Pure_Raw: any = [];
    let class_Blank_Raw: any = [];
    this.jsonld_Flattened.map((item: any) => {
      let array_Type = item['@type'];
      let id = item['@id'];
      if (array_Type.length === 1) {
        let str_Type = array_Type[0].split('#')[1];
        if (str_Type === 'Class') {
          if (id.includes('_:b')) {
            class_Blank_Raw.push(item);
          } else {
            class_Pure_Raw.push(item);
          }
        }
      }
    });
    class_Pure_Raw.map((item: any) => {
      let id = '';
      let label = '';

      id = item['@id'];
      label = id.split('#')[1];

      let obj = {
        id: this.index.toString(),
        type: 'Class',
        value: label,
        definition: '',
        question: '',
        reference: '',
      };
      this.typesenseData.push(obj);
      this.index = this.index + 1;
    });
  }

  extractRelation() {
    this.jsonld_Flattened.map((item: any) => {
      let type = item['@type'][0];
      let objectProperty: string = '';
      let domain: string = '';
      let range: string = '';

      if (type.split('#')[1] === 'ObjectProperty') {
        objectProperty = item['@id'].split('#')[1];
        if (item['http://www.w3.org/2000/01/rdf-schema#domain']) {
          domain = item['http://www.w3.org/2000/01/rdf-schema#domain'][0]['@id'];
        }

        if (item['http://www.w3.org/2000/01/rdf-schema#range']) {
          range = item['http://www.w3.org/2000/01/rdf-schema#range'][0]['@id'];
        }

        if (domain.length > 0 && range.length > 0) {
          let obj = {
            id: this.index.toString(),
            type: 'Relation',
            value: objectProperty,
            definition: '',
            question: '',
            reference: '',
          };
          this.typesenseData.push(obj);
        }
      }
      this.index = this.index + 1;
    });
  }

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
        <h1>TypeSense Demo</h1>
        <div ref={el => (this.searchBoxEl = el as HTMLDivElement)}></div>
        <div ref={el => (this.hitsEl = el as HTMLDivElement)}></div>
      </Host>
    );
  }
}
