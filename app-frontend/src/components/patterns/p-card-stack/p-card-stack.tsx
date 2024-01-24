import { Component, Prop, State, Host, FunctionalComponent, Watch, h } from '@stencil/core';

@Component({
  tag: 'p-card-stack',
  styleUrl: 'p-card-stack.css',
  shadow: true,
})
export class PCardStack {
  @Prop() data: string;

  @State() variant: string = 'basic';
  @State() cardStack: any = [];

  @Watch('data') watchActionStatus(newVal: boolean, oldVal: boolean) {
    if (newVal != oldVal) {
      this.generateCardStack();
    }
  }

  componentWillLoad() {
    this.generateCardStack();
  }

  generateCardStack() {
    if (this.data.length === 0) {
      return;
    }
    this.cardStack = JSON.parse(this.data);
    this.cardStack = [...this.cardStack];
  }

  BasicCardStack: FunctionalComponent = () => <div></div>;

  CompactCardStack: FunctionalComponent = () => <div></div>;

  render() {
    return <Host>{this.cardStack.length < 7 ? <this.BasicCardStack></this.BasicCardStack> : <this.CompactCardStack></this.CompactCardStack>}</Host>;
  }
}
