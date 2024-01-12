import { Component, Host, Prop, h } from '@stencil/core';

interface LooseObject {
  [key: string]: any;
}

@Component({
  tag: 'l-row',
  styleUrl: 'l-row.css',
  shadow: true,
})
export class LRow {
  @Prop() variant: string = '';
  @Prop() justify: string = '';
  @Prop() align: string = 'center';
  @Prop() direction: string = 'row';

  private styleObject: LooseObject = {};

  componentWillLoad() {
    this.generate_StyleObject();
  }

  generate_StyleObject() {
    this.styleObject.display = 'flex';
    this.styleObject.alignItems = this.align;
    this.styleObject.justifyContent = this.justify;
    this.styleObject.flexDirection = this.direction;
  }

  render() {
    return (
      <Host style={this.styleObject}>
        <slot></slot>
      </Host>
    );
  }
}
