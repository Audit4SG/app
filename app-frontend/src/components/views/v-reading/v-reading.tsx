import { Component, Prop, State, Listen, Host, h } from '@stencil/core';
import { RouterHistory, injectHistory, MatchResults } from '@stencil/router';
import { state } from '../../../global/script';

@Component({
  tag: 'v-reading',
  styleUrl: 'v-reading.css',
  shadow: true,
})
export class VReading {
  @Listen('buttonClick') handleButtonClick(e) {
    if (e.detail.action === 'editStack') {
      this.history.push('/ontology', {});
    }
  }

  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;

  @State() cardStack: any = [];
  @State() sessionId: string;

  componentWillLoad() {
    this.sessionId = this.match.params.sessionId.trim();
  }

  componentDidLoad() {
    setTimeout(() => this.getCardStackFromDB(), 1000);
  }

  async getCardStackFromDB() {
    let url: string = document.domain === 'localhost' ? 'http://localhost:3334/get-card-stack' : 'https://app-api.audit4sg.org/get-card-stack';
    let selectedCardIds: any;

    let options: any = {
      method: 'POST',
      body: JSON.stringify({ sessionId: this.sessionId }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    await fetch(url, options)
      .then(response => response.json())
      .then(async data => {
        if (data.success) {
          selectedCardIds = JSON.parse(data.readingData[0][1]);
          console.log(selectedCardIds);
          this.generateCardStack(selectedCardIds);
        } else {
          alert('An error occured while fetching data');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  generateCardStack(selectedCardIds: any) {
    let nodes: any = JSON.parse(state.nodes);
    nodes.map((node: any) => {
      selectedCardIds.map((selectedCardId: string) => {
        if (node.id === selectedCardId) {
          let obj = {
            id: node.id,
            label: node.label,
            definition: node.description,
            provocation: node.provocation,
            references: node.references,
          };
          this.cardStack.push(obj);
        }
      });
    });
    state.isInitialized = true;
    this.updateCardStackInStore();
  }

  updateCardStackInStore() {
    this.cardStack = [...this.cardStack];
    state.cardStack = JSON.stringify(this.cardStack);
  }

  render() {
    return (
      <Host>
        <l-row justify="space-between" align="center">
          <e-text>Audit Stack</e-text>
          <e-button variant="pill" action="editStack">
            Edit Stack
          </e-button>
        </l-row>
        <l-spacer value={2}></l-spacer>
        <p-gallery>
          {this.cardStack.map((card: any) => (
            <p-card-basic nodeId={card.id} label={card.label} definition={card.definition} provocation={card.provocation} reference={card.references} expand={true}></p-card-basic>
          ))}
        </p-gallery>
      </Host>
    );
  }
}

injectHistory(VReading);
