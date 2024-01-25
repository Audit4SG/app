import { Component, Prop, State, Listen, Host, h } from '@stencil/core';
import { injectHistory, RouterHistory } from '@stencil/router';
import { state } from '../../../global/script';

@Component({
  tag: 'v-summary',
  styleUrl: 'v-summary.css',
  shadow: true,
})
export class VSummary {
  @Listen('buttonClick') handleButtonClick(e) {
    if (e.detail.action === 'goBack') {
      this.history.goBack();
    }
  }

  @Prop() history: RouterHistory;

  @State() cardStack: any = [];

  componentWillLoad() {
    if (state.cardStack.length === 0) {
      this.history.push('/', {});
      return;
    }
    this.cardStack = JSON.parse(state.cardStack);
    this.cardStack = [...this.cardStack];
    console.log(this.cardStack);
  }

  render() {
    return (
      <Host>
        <l-row justify="space-between" align="center">
          <e-text>Audit Summary</e-text>
          <e-button variant="pill" action="goBack">
            Go back
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

injectHistory(VSummary);
