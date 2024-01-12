import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'c-card',
  styleUrl: 'c-card.css',
  shadow: true,
})
export class CCard {
  @Prop() theme: string = 'default';

  private styleClasses: string = '';

  componentWillLoad() {
    this.styleClasses = 'card';
    if (this.theme === 'green') {
      this.styleClasses = `${this.styleClasses} card--green`;
    } else {
      this.styleClasses = `${this.styleClasses} card--grey`;
    }
  }

  render() {
    return (
      <div class={this.styleClasses}>
        <slot />
      </div>
    );
  }
}
