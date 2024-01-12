import { Component, State, Prop, Host, h } from '@stencil/core';
import { RouterHistory, injectHistory, MatchResults } from '@stencil/router';
import * as jsonld from 'jsonld';

@Component({
  tag: 'v-reading',
  styleUrl: 'v-reading.css',
  shadow: true,
})
export class VReading {
  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;

  @State() isDataFetched: boolean = false;
  @State() cardStack: any = [];
  @State() sessionId: string;

  componentWillLoad() {
    this.sessionId = this.match.params.sessionId.trim();
  }

  componentDidLoad() {
    this.fetchData();
  }

  private readingData: any;
  async fetchData() {
    let url: string = document.domain === 'localhost' ? 'http://localhost:3334/reading-data' : 'https://app-api.audit4sg.org/reading-data';
    let options: any = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sessionId: this.sessionId }),
    };
    await fetch(url, options)
      .then(response => response.json())
      .then(async data => {
        this.process_Jsonld(JSON.parse(data.payload));
        this.readingData = JSON.parse(data.readingData[0][1]);
      })
      .catch(error => {
        console.log(error);
      });
  }

  private jsonld_Flattened: any;
  private class_Pure: any = [];
  private nodes: any = [];

  async process_Jsonld(data_JSONLD: any) {
    this.jsonld_Flattened = await jsonld.flatten(data_JSONLD);
    this.get_Classes();
    this.generate_Nodes();
    this.generateCardStack();
  }

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
      let id = '';
      let label = '';
      let subClassOf = '';

      id = item['@id'];
      label = id.split('#')[1];

      subClassOf = '';
      if (item['http://www.w3.org/2000/01/rdf-schema#subClassOf']) {
        subClassOf = item['http://www.w3.org/2000/01/rdf-schema#subClassOf'][0]['@id'];
      }

      let description = '';
      let provocation = '';
      let references = '';

      if (item['http://www.w3.org/2000/01/rdf-schema#description']) {
        description = item['http://www.w3.org/2000/01/rdf-schema#description'][0]['@value'];
      } else {
        description = '(To be updated)';
      }

      if (item['http://www.w3.org/2000/01/rdf-schema#provocation']) {
        provocation = item['http://www.w3.org/2000/01/rdf-schema#provocation'][0]['@value'];
      } else {
        provocation = '(To be updated)';
      }

      if (item['http://www.w3.org/2000/01/rdf-schema#references']) {
        references = item['http://www.w3.org/2000/01/rdf-schema#references'][0]['@value'];
      } else {
        references = '(To be updated)';
      }

      let obj = {
        id: id,
        label: label,
        subClassOf: subClassOf,
        description: description,
        provocation: provocation,
        references: references,
      };
      this.class_Pure.push(obj);
    });
  }

  generate_Nodes() {
    this.class_Pure.map((item: any) => {
      let obj = {
        id: item.id,
        label: item.label,
        description: item.description,
        provocation: item.provocation,
        references: item.references,
      };
      this.nodes.push(obj);
    });
  }

  generateCardStack() {
    let buff = [];

    this.readingData.map((item: any) => {
      this.nodes.map((node: any) => {
        console.log(item);
        console.log(node.id);
        if (item === node.id) {
          console.log('lel');
          buff.push(node);
        }
      });
    });
    this.cardStack = [...buff];
  }

  handleEditButtonClick() {
    this.history.push('/demo-20', {
      cardStack: this.cardStack,
    });
  }

  render() {
    return (
      <Host>
        <l-row justify="space-between">
          <e-text>
            <strong>Audit summary</strong>
          </e-text>
          <button onClick={() => this.handleEditButtonClick()}>Edit</button>
        </l-row>
        <br />
        <div class="card-gallery">
          {this.cardStack.map(card => (
            <div class="card-container">
              <p>
                <strong>{card.label}</strong>
              </p>
              <p>
                <label>DESCRIPTION</label>
                <br />
                {card.description}
              </p>
              <p>
                <label>PROVOCATION</label>
                <br />
                {card.provocation}
              </p>
              <p>
                <label>REFERENCES</label>
                <br />
                {card.references}
              </p>
            </div>
          ))}
        </div>
      </Host>
    );
  }
}

injectHistory(VReading);
