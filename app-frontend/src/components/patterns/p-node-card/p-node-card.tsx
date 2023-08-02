import { Component, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'p-node-card',
  styleUrl: 'p-node-card.css',
  shadow: true,
})
export class PNodeCard {
  @Prop() isExpanded: boolean = false;

  @Watch('isExpanded')
  isExpandedWatcher(newVal: boolean, oldVal: boolean) {
    if (newVal != oldVal) {
      this.isExpanded = newVal;
    }
  }

  render() {
    return (
      <div class={`card-container ${this.isExpanded && 'expanded'}`}>
        <slot name="title"></slot>
        <slot name="data"></slot>
      </div>
    );
  }
}
