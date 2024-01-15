import { Component, Prop, Host, h } from '@stencil/core';

interface LooseObject {
  [key: string]: any;
}

@Component({
  tag: 'c-sticky-area',
  styleUrl: 'c-sticky-area.css',
  shadow: true,
})
export class CStickyArea {
  @Prop() top: string;
  @Prop() right: string;
  @Prop() bottom: string;
  @Prop() left: string;

  private styleObject: LooseObject = {};

  componentWillLoad() {
    this.generateStyleObject();
  }

  generateStyleObject() {
    this.styleObject.boxSizing = 'border-box';
    this.styleObject.position = 'fixed';
    if (this.top) {
      this.styleObject.top = this.top;
    }
    if (this.right) {
      this.styleObject.right = this.right;
    }
    if (this.bottom) {
      this.styleObject.bottom = this.bottom;
    }
    if (this.left) {
      this.styleObject.left = this.left;
    }
  }

  render() {
    return (
      <Host style={this.styleObject}>
        <slot></slot>
      </Host>
    );
  }
}
