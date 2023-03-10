import { Component, Host, FunctionalComponent, Prop, h } from '@stencil/core';

@Component({
  tag: 'p-item-doc',
  styleUrl: 'p-item-doc.css',
  shadow: true,
})
export class PItemDoc {
  @Prop() cover: string;
  @Prop() name: string;
  @Prop() purpose: string;

  ReadControls: FunctionalComponent = () => (
    <l-row justifyContent="space-between">
      <div></div>
      <e-button action="openReader">Read</e-button>
    </l-row>
  );

  BuyControls: FunctionalComponent = () => (
    <l-row justifyContent="space-between">
      <e-link>Read Abstract</e-link>
      <e-button action="goToCheckout">Buy</e-button>
    </l-row>
  );

  render() {
    return (
      <Host>
        <header></header>
        <footer>
          <e-text>{this.name}</e-text>
          <l-spacer value={0.5}></l-spacer>
          <l-seperator></l-seperator>
          <l-spacer value={1}></l-spacer>
          {this.purpose === 'buy' ? <this.BuyControls></this.BuyControls> : <this.ReadControls></this.ReadControls>}
        </footer>
      </Host>
    );
  }
}
