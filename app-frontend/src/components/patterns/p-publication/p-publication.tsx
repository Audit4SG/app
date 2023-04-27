import { Component, Host, State, FunctionalComponent, Prop, Listen, h } from '@stencil/core';
import { Helper_Generate_Document_Price } from '../../../global/script/helpers';

@Component({
  tag: 'p-publication',
  styleUrl: 'p-publication.css',
  shadow: true,
})
export class PPublication {
  @Listen('event_selectInput') handle_SelectInput(e) {
    if (e.detail.name === 'select_Document') {
      this.price_Active_Document = Helper_Generate_Document_Price(JSON.parse(this.documents), e.detail.value);
      this.id_Active_Document = e.detail.value;
    }
  }

  @Prop() id_Publication: string = '';
  @Prop() heading: string = '';
  @Prop() sub_Heading: string = '';
  @Prop() description: string = '';
  @Prop() url_Sample: string = '';
  @Prop() url_Toc: string = '';
  @Prop() url_Cover: string = '';
  @Prop() isSkel: boolean = false;
  @Prop() documents: any;

  @State() price_Active_Document: string;
  @State() id_Active_Document: string;

  BuyControls: FunctionalComponent = () => (
    <footer>
      <l-spacer value={0.75}></l-spacer>
      <e-text>{this.description}</e-text>
      <l-row>
        <e-text variant="footnote">
          <e-link>Contents</e-link>
        </e-text>
        <l-spacer variant="horizontal" value={0.5}></l-spacer>
        <e-text variant="footnote">
          <e-link>Abstracts</e-link>
        </e-text>
        <l-spacer variant="horizontal" value={0.5}></l-spacer>
        <e-text variant="footnote">
          <e-link>Cover</e-link>
        </e-text>
      </l-row>
      <l-spacer value={0.75}></l-spacer>
      <l-seperator></l-seperator>
      <l-spacer value={1}></l-spacer>
      <l-row justifyContent="space-between">
        <e-select options={this.documents} name="select_Document"></e-select>
        <e-text>{this.price_Active_Document}</e-text>
      </l-row>
      <l-spacer value={1}></l-spacer>
      <e-button action="goToCheckout" value={this.id_Active_Document} size="wide">
        Buy
      </e-button>
      <l-spacer value={1}></l-spacer>
    </footer>
  );

  ui_Skel: FunctionalComponent = () => <div class="item-doc--skel"></div>;

  ui_Default: FunctionalComponent = () => (
    <div>
      <header>
        <span>
          <e-text variant="subHeading">{this.heading}</e-text>
          <e-text>{this.sub_Heading}</e-text>
        </span>
      </header>
      <this.BuyControls></this.BuyControls>
    </div>
  );

  render() {
    return <Host>{this.isSkel ? <this.ui_Skel></this.ui_Skel> : <this.ui_Default></this.ui_Default>}</Host>;
  }
}
