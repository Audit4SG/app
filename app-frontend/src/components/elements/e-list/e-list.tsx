import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'e-list',
  styleUrl: 'e-list.css',
  shadow: true,
})
export class EList {
  @Prop() bullet: string = 'disc';

  private styleClasses: string = '';

  componentWillLoad() {
    this.generateStyleClasses();
  }

  generateStyleClasses() {
    this.styleClasses = `bullet__${this.bullet}`;
  }

  render() {
    return (
      <ul class={this.styleClasses}>
        <slot />
      </ul>
    );
  }
}
