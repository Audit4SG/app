import { Component, Prop, State, Host, FunctionalComponent, Watch, h } from '@stencil/core';

@Component({
  tag: 'p-card-stack',
  styleUrl: 'p-card-stack.css',
  shadow: true,
})
export class PCardStack {
  @State() variant: string = 'basic';
  @Prop() item: string;

  Basic: FunctionalComponent = () => <div></div>;

  CompactBasic: FunctionalComponent = () => <div></div>;

  CompactStacked: FunctionalComponent = () => <div></div>;

  render() {
    return (
      <Host>
        <p-card-stack-item label="Card label" definition="This is a definition" provocation="This is a provocation" reference="This is a reference"></p-card-stack-item>
      </Host>
    );
  }
}
