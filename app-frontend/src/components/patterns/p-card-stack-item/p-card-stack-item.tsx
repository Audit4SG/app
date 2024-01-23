import { Component, Prop, State, Host, Listen, h } from '@stencil/core';
import { gsap } from 'gsap';

@Component({
  tag: 'p-card-stack-item',
  styleUrl: 'p-card-stack-item.css',
  shadow: true,
})
export class PCardStackItem {
  cardStackItemContainer!: HTMLDivElement;
  definitionContainer!: HTMLDivElement;
  provocationContainer!: HTMLDivElement;
  referenceContainer!: HTMLDivElement;

  separatorDefinitionProvocation!: HTMLDivElement;
  separatorProvocationReference!: HTMLDivElement;

  @Listen('buttonClick') handleButtonClick(e) {
    if (e.detail.action === 'toggleDefinition') {
      this.toggleDefinition();
    } else if (e.detail.action === 'toggleCardExpansion') {
      this.toggleCardExpansion();
    } else if (e.detail.action === 'toggleReferences') {
    } else if (e.detail.action === 'removeCard') {
    }
  }

  @State() isCardExpanded: boolean = true;
  @State() isDefinitionExpanded: boolean = false;
  @State() isReferencesExpanded: boolean = false;

  @Prop() nodeId: string = '';
  @Prop() variant: string = 'basic';
  @Prop() label: string = '';
  @Prop() definition: string = '';
  @Prop() provocation: string = '';
  @Prop() reference: string = '';

  private tooltipControlIconSize: string = '1.25em';
  private tl: any = gsap.timeline();

  componentDidLoad() {
    this.initCardSection();
  }

  initCardSection() {
    this.definitionContainer.style.height = '0px';
    this.definitionContainer.style.overflow = 'hidden';
    this.provocationContainer.style.height = 'auto';
    this.referenceContainer.style.height = '0px';
    this.referenceContainer.style.overflow = 'hidden';

    this.separatorDefinitionProvocation.style.height = '0px';
    this.separatorDefinitionProvocation.style.overflow = 'hidden';
    this.separatorDefinitionProvocation.style.opacity = '0';
    this.separatorProvocationReference.style.height = '0px';
    this.separatorProvocationReference.style.overflow = 'hidden';
    this.separatorProvocationReference.style.opacity = '0';
  }

  toggleDefinition() {
    if (!this.isDefinitionExpanded) {
      gsap.to(this.definitionContainer, { height: 'auto', duration: 0.25 });
      if (this.isCardExpanded) {
        this.showDefinitionProvocationSeparator();
      }
    } else {
      gsap.to(this.definitionContainer, { overflow: 'hidden', duration: 0 });
      gsap.to(this.definitionContainer, { height: '0px', duration: 0.25 });
      if (this.isCardExpanded) {
        this.hideDefinitionProvocationSeparator();
      }
    }
    this.isDefinitionExpanded = !this.isDefinitionExpanded;
  }

  toggleCardExpansion() {
    if (!this.isCardExpanded) {
      this.tl.to(this.provocationContainer, { height: 'auto', duration: 0.25 });
      if (this.isDefinitionExpanded) {
        this.showDefinitionProvocationSeparator();
      }
      if (this.isReferencesExpanded) {
        this.showProvocationReferenceSeparator();
      }
    } else {
      this.tl.to(this.provocationContainer, { overflow: 'hidden', duration: 0 });
      this.tl.to(this.provocationContainer, { height: '0px', duration: 0.25 });
      if (this.isDefinitionExpanded) {
        this.hideDefinitionProvocationSeparator();
      }
      if (this.isReferencesExpanded) {
        this.hideProvocationReferenceSeparator();
      }
    }
    this.isCardExpanded = !this.isCardExpanded;
  }

  showDefinitionProvocationSeparator() {
    gsap.to(this.separatorDefinitionProvocation, { height: 'auto', opacity: 1, duration: 0.25 });
  }

  hideDefinitionProvocationSeparator() {
    gsap.to(this.separatorDefinitionProvocation, { height: '0px', opacity: 0, duration: 0.25 });
  }

  showProvocationReferenceSeparator() {
    gsap.to(this.separatorProvocationReference, { height: 'auto', opacity: 1, duration: 0.25 });
  }

  hideProvocationReferenceSeparator() {
    gsap.to(this.separatorProvocationReference, { height: '0px', opacity: 0, duration: 0.25 });
  }

  render() {
    return (
      <div class="card-stack-item__basic">
        <header>
          <l-row justify="space-between" align="center">
            <e-text variant="heading__menu">{this.label}</e-text>
            <l-row>
              <e-button variant="transparent" action="toggleDefinition">
                <ph-info size={this.tooltipControlIconSize} color="#011E2B" weight={this.isDefinitionExpanded ? 'fill' : 'regular'} />
              </e-button>
              <e-button variant="transparent" action="toggleCardExpansion">
                {this.isCardExpanded ? <ph-minus-circle size={this.tooltipControlIconSize} /> : <ph-caret-circle-down size={this.tooltipControlIconSize} />}
              </e-button>
              <e-button variant="transparent" action="removeCard">
                <ph-x-circle size={this.tooltipControlIconSize} />
              </e-button>
            </l-row>
          </l-row>
        </header>
        <main>
          <div ref={el => (this.definitionContainer = el as HTMLDivElement)}>
            <e-text>
              <em>{this.definition}</em>
            </e-text>
          </div>
          <div ref={el => (this.separatorDefinitionProvocation = el as HTMLDivElement)}>
            <l-spacer value={0.5}></l-spacer>
            <l-seperator></l-seperator>
            <l-spacer value={0.5}></l-spacer>
          </div>
          <div ref={el => (this.provocationContainer = el as HTMLDivElement)}>
            <e-text>{this.provocation}</e-text>
            {this.reference && (
              <div>
                <l-spacer value={0.5}></l-spacer>
                <e-button action="toggleReference">{this.isReferencesExpanded ? 'Hide references' : 'Show references'}</e-button>
              </div>
            )}
          </div>
          <div ref={el => (this.separatorProvocationReference = el as HTMLDivElement)}>
            <l-spacer value={0.5}></l-spacer>
            <l-seperator></l-seperator>
            <l-spacer value={0.5}></l-spacer>
          </div>
          <div ref={el => (this.referenceContainer = el as HTMLDivElement)}>
            <e-text>{this.reference}</e-text>
          </div>
        </main>
      </div>
    );
  }
}
