import { Component, Listen, State, Prop, Host, h } from '@stencil/core';

interface LooseObject {
  [key: string]: any;
}

@Component({
  tag: 'p-tooltip',
  styleUrl: 'p-tooltip.css',
  shadow: true,
})
export class PTooltip {
  @Listen('buttonClick') handleButtonClick(e) {
    if (e.detail.action === 'toggleDefinition') {
      this.isDefinitionVisible = !this.isDefinitionVisible;
    }
  }

  @Prop() x: number = 0;
  @Prop() y: number = 0;
  @Prop() label: string = '';
  @Prop() provocation: string = '';
  @Prop() definition: string = '';
  @Prop() reference: string = '';

  @State() isDefinitionVisible: boolean = false;

  private styleObject: LooseObject = {};
  private tooltipControlIconSize: string = '1.25em';
  private viewportHeight: number = window.innerHeight;
  private viewportWidth: number = window.innerWidth;
  private tooltipHeight: number = 200;
  private tooltipWidth: number = 360;

  componentWillLoad() {
    this.generateStyleClasses();
  }

  generateStyleClasses() {
    if (this.y + this.tooltipHeight >= this.viewportHeight) {
      this.styleObject.top = `${this.y - this.tooltipHeight}px`;
    } else {
      this.styleObject.top = `${this.y + 10}px`;
    }

    if (this.x + this.tooltipWidth >= this.viewportWidth) {
      this.styleObject.left = `${this.x - this.tooltipWidth}px`;
    } else {
      this.styleObject.left = `${this.x + 10}px`;
    }

    this.styleObject.width = `${this.tooltipWidth}px`;
  }

  render() {
    return (
      <Host style={this.styleObject}>
        <l-row align="center" justify="space-between">
          <e-text variant="heading__menu">{this.label}</e-text>
          <div>
            <e-button variant="transparent" action="toggleDefinition">
              <ph-info size={this.tooltipControlIconSize} color="#011E2B" weight={this.isDefinitionVisible ? 'fill' : 'regular'} />
            </e-button>
            <e-button variant="transparent" action="closeToolTip">
              <ph-x-circle size={this.tooltipControlIconSize} />
            </e-button>
          </div>
        </l-row>
        <l-spacer value={0.5}></l-spacer>
        <c-fadebox maxHeight={`${this.tooltipHeight}px`} overflow="scroll">
          {this.isDefinitionVisible && (
            <div>
              <e-text>
                <em>{this.definition}</em>
              </e-text>
              <l-spacer value={1}></l-spacer>
              <l-seperator></l-seperator>
              <l-spacer value={1}></l-spacer>
            </div>
          )}
          <e-text>{this.provocation}</e-text>
        </c-fadebox>
      </Host>
    );
  }
}
