import { Component, Host, Prop, h } from '@stencil/core';

interface LooseObject {
  [key: string]: any;
}

@Component({
  tag: 'c-fadebox',
  styleUrl: 'c-fadebox.css',
  shadow: true,
})
export class CFadebox {
  @Prop() maxHeight: string = '';
  @Prop() overflow: string = '';
  @Prop() fadeTop: string = '';
  @Prop() fadeBottom: string = '';

  private styleObject: LooseObject = {};

  componentWillLoad() {
    this.generateStyleObject();
  }

  generateStyleObject() {
    this.styleObject.position = 'relative';
    this.styleObject.display = 'block';
    this.styleObject.maxHeight = this.maxHeight;
    this.styleObject.overflow = this.overflow;
    this.styleObject.paddingBottom = '1em';
  }

  render() {
    return (
      <Host>
        <div class="fade-area fade-area__top"></div>
        <div style={this.styleObject}>
          <slot></slot>
        </div>
        <div class="fade-area fade-area__bottom"></div>
      </Host>
    );
  }
}
