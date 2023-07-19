import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'p-info-item',
  styleUrl: 'p-info-item.css',
  shadow: true,
})
export class PInfoItem {
  @State() isExpanded: boolean = false;

  handleClick() {
    this.isExpanded = !this.isExpanded;
  }

  render() {
    return (
      <div class="container">
        <div class="title">
          <strong>
            <slot name="title"></slot>
          </strong>
        </div>
        <div class={`data-container ${this.isExpanded ? 'expanded' : 'collapsed'}`}>
          {' '}
          <slot name="data"></slot>
        </div>
        <button onClick={() => this.handleClick()}>{this.isExpanded ? 'Collapse' : 'Expand'}</button>
      </div>
    );
  }
}
