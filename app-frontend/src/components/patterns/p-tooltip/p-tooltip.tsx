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

  @State() isDefinitionVisible: boolean = false;

  private styleObject: LooseObject = {};

  componentWillLoad() {
    this.generateStyleClasses();
  }

  generateStyleClasses() {
    this.styleObject.left = `${this.x}px`;
    this.styleObject.top = `${this.y}px`;
  }

  render() {
    return (
      <Host style={this.styleObject}>
        <l-row align="center" justify="space-between">
          <e-text variant="heading__menu">{this.label}</e-text>
          <div>
            <e-button variant="transparent" action="toggleDefinition">
              <ph-info size="1.5em" color="#011E2B" weight={this.isDefinitionVisible ? 'fill' : 'regular'} />
            </e-button>
            <e-button variant="transparent" action="closeToolTip">
              <ph-x-circle size="1.5em" />
            </e-button>
          </div>
        </l-row>
        <l-spacer value={0.5}></l-spacer>
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
      </Host>
    );
  }
}
