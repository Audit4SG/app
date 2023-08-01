import { Component, State, Prop, Watch, h } from '@stencil/core';
import { state } from '../../../global/script';

@Component({
  tag: 'p-node-item',
  styleUrl: 'p-node-item.css',
  shadow: true,
})
export class PNodeItem {
  @State() isExpanded: boolean = false;
  @Prop() variant: string = 'default';

  @Watch('variant')
  variantWatcher(newVal: string, oldVal: string) {
    if (newVal != oldVal) {
      state.nodeItemVariant = newVal;
    }
  }

  handleClick() {
    if (state.nodeItemVariant === 'contract') {
      this.isExpandedContracted = !this.isExpandedContracted;
    } else {
      this.isExpanded = !this.isExpanded;
    }
  }

  @State() isExpandedContracted: boolean = false;

  render() {
    return (
      <div class="container">
        <div class="title">
          <l-row justifyContent="space-between">
            <strong>
              <slot name="title"></slot>
            </strong>
            <button onClick={() => this.handleClick()}>{this.isExpanded ? <ion-icon name="remove-outline"></ion-icon> : <ion-icon name="expand-outline"></ion-icon>}</button>
          </l-row>
        </div>

        {state.nodeItemVariant === 'contract' ? (
          this.isExpandedContracted && (
            <div class={`data-container expanded`}>
              <slot name="data"></slot>
            </div>
          )
        ) : (
          <div class={`data-container ${this.isExpanded ? 'expanded' : 'collapsed'}`}>
            {' '}
            <slot name="data"></slot>
          </div>
        )}
      </div>
    );
  }
}
