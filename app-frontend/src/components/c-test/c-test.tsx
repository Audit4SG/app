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
    this.get_Classes();
    this.get_Relationships();
    this.displayTypesenseData();
  }

  private typeSenseData: any = [];

  get_Classes() {
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
      let label = item['@id'].split('#')[1];
      let description = '';
      let provocation = '';
      let references = '';

      if (item['http://www.w3.org/2000/01/rdf-schema#description']) {
        description = item['http://www.w3.org/2000/01/rdf-schema#description'][0]['@value'];
      }

      if (item['http://www.w3.org/2000/01/rdf-schema#provocation']) {
        provocation = item['http://www.w3.org/2000/01/rdf-schema#provocation'][0]['@value'];
      }

      if (item['http://www.w3.org/2000/01/rdf-schema#references']) {
        references = item['http://www.w3.org/2000/01/rdf-schema#references'][0]['@value'];
      }

      let obj = {
        label: label,
        type: 'Class',
        description: description,
        provocation: provocation,
        references: references,
      };

      this.typeSenseData.push(obj);
    });
  }

  get_Relationships() {
    this.jsonld_Flattened.map((item: any) => {
      let type = item['@type'][0];
      let objectProperty: string = '';

      if (type.split('#')[1] === 'ObjectProperty') {
        objectProperty = item['@id'].split('#')[1];

        let obj = {
          label: objectProperty,
          type: 'Relation',
          description: '',
          provocation: '',
          references: '',
        };

        this.typeSenseData.push(obj);
      }
    });
  }

  displayTypesenseData() {
    console.log(this.typeSenseData);
  }

  render() {
    return (
      <Host>
        <p>Test</p>
      </Host>
    );
  }
}
