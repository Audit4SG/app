import { Component, Prop, State, FunctionalComponent, Listen, Watch, h } from '@stencil/core';
import { gsap } from 'gsap';

@Component({
  tag: 'p-card-basic',
  styleUrl: 'p-card-basic.css',
  shadow: true,
})
export class PCardBasic {
  cardStackItemContainer!: HTMLDivElement;
  definitionContainer!: HTMLDivElement;
  provocationContainer!: HTMLDivElement;
  referenceContainer!: HTMLDivElement;

  separatorDefinitionProvocation!: HTMLDivElement;
  separatorProvocationReference!: HTMLDivElement;

  @Listen('event_LinkClick') handleLinkClick(e) {
    if (e.detail.action === 'toggleExpandedReadingMode') {
      if (!this.isExpandedReadingMode) {
        this.enableExpandedReadingMode();
        this.expandedReadingLabel = 'Hide';
      } else {
        this.disableExpandedReadingMode();
        this.expandedReadingLabel = 'Read more';
      }
      this.isExpandedReadingMode = !this.isExpandedReadingMode;
    }
  }

  @Listen('buttonClick') handleButtonClick(e) {
    if (e.detail.action === 'toggleDefinition') {
      this.toggleDefinition();
    } else if (e.detail.action === 'toggleProvocation') {
      this.toggleProvocation();
    } else if (e.detail.action === 'toggleReference') {
      this.toggleReference();
    }
  }

  @State() isCardExpanded: boolean = true;
  @State() isDefinitionExpanded: boolean = false;
  @State() isReferencesExpanded: boolean = false;
  @State() expandedReadingLabel: string = 'Read more';
  @State() isExpandedReadingMode: boolean = false;

  @Prop() nodeId: string = '';
  @Prop() variant: string = 'basic';
  @Prop() label: string = '';
  @Prop() definition: string = '';
  @Prop() provocation: string = '';
  @Prop() reference: string = '';
  @Prop() expand: boolean = true;

  @Watch('expand') watchExpandProp(newVal: boolean, oldVal: boolean) {
    if (!newVal && this.isCardExpanded) {
      this.toggleProvocation();
    }
  }

  private tooltipControlIconSize: string = '1.25em';
  private collapsedCardTextLength: number = 120;

  componentDidLoad() {
    this.initCardSection();

    if (!this.expand) {
      this.toggleProvocation();
    }
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
      } else {
        if (this.isExpandedReadingMode) {
          this.disableExpandedReadingMode();
          this.expandedReadingLabel = 'Read more';
          this.isExpandedReadingMode = !this.isExpandedReadingMode;
        }
      }
    }
    this.isDefinitionExpanded = !this.isDefinitionExpanded;
  }

  toggleProvocation() {
    if (!this.isCardExpanded) {
      gsap.to(this.provocationContainer, { height: 'auto', duration: 0.25 });
      if (this.isDefinitionExpanded) {
        this.showDefinitionProvocationSeparator();
      }
      if (this.isReferencesExpanded) {
        this.showProvocationReferenceSeparator();
      }
    } else {
      gsap.to(this.provocationContainer, { overflow: 'hidden', duration: 0 });
      gsap.to(this.provocationContainer, { height: '0px', duration: 0.25 });
      if (this.isDefinitionExpanded) {
        this.hideDefinitionProvocationSeparator();
      } else {
        if (this.isExpandedReadingMode) {
          this.disableExpandedReadingMode();
          this.expandedReadingLabel = 'Read more';
          this.isExpandedReadingMode = !this.isExpandedReadingMode;
        }
      }
      if (this.isReferencesExpanded) {
        this.hideProvocationReferenceSeparator();
      }
    }
    this.isCardExpanded = !this.isCardExpanded;
  }

  toggleReference() {
    if (!this.isReferencesExpanded) {
      gsap.to(this.referenceContainer, { height: 'auto', duration: 0.25 });
      if (this.isCardExpanded) {
        this.showProvocationReferenceSeparator();
      }
    } else {
      gsap.to(this.referenceContainer, { overflow: 'hidden', duration: 0 });
      gsap.to(this.referenceContainer, { height: '0px', duration: 0.25 });
      if (this.isCardExpanded) {
        this.hideProvocationReferenceSeparator();
      }
    }
    this.isReferencesExpanded = !this.isReferencesExpanded;
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

  enableExpandedReadingMode() {
    gsap.to(this.cardStackItemContainer, { width: '540px', duration: 0.25 });
  }

  disableExpandedReadingMode() {
    gsap.to(this.cardStackItemContainer, { width: '280px', duration: 0.25 });
  }

  ReadingModeControl: FunctionalComponent = () => (
    <e-link event={true} action="toggleExpandedReadingMode" variant="readMore">
      {this.expandedReadingLabel}
    </e-link>
  );

  render() {
    return (
      <div class="card__basic" ref={el => (this.cardStackItemContainer = el as HTMLDivElement)}>
        <header>
          <l-row justify="space-between" align="center">
            <e-text variant="heading__menu">{this.label}</e-text>
            <l-row>
              <e-button variant="transparent" action="toggleDefinition">
                <ph-info size={this.tooltipControlIconSize} color="#011E2B" weight={this.isDefinitionExpanded ? 'fill' : 'regular'} />
              </e-button>
              <e-button variant="transparent" action="toggleProvocation">
                {this.isCardExpanded ? <ph-minus-circle size={this.tooltipControlIconSize} /> : <ph-caret-circle-down size={this.tooltipControlIconSize} />}
              </e-button>
              <e-button variant="transparent" action="deleteCard" value={this.nodeId}>
                <ph-x-circle size={this.tooltipControlIconSize} />
              </e-button>
            </l-row>
          </l-row>
        </header>
        <div ref={el => (this.definitionContainer = el as HTMLDivElement)}>
          {this.definition.length > this.collapsedCardTextLength ? (
            <div>
              {this.isExpandedReadingMode ? (
                <e-text>
                  <em>{this.definition}</em>
                </e-text>
              ) : (
                <e-text>
                  <em>{this.definition.substring(0, this.collapsedCardTextLength)}...</em>
                </e-text>
              )}
              <this.ReadingModeControl></this.ReadingModeControl>
            </div>
          ) : (
            <e-text>
              <em>{this.definition}</em>
            </e-text>
          )}
        </div>
        <div ref={el => (this.separatorDefinitionProvocation = el as HTMLDivElement)}>
          <l-spacer value={0.5}></l-spacer>
          <l-seperator></l-seperator>
          <l-spacer value={0.5}></l-spacer>
        </div>
        <div ref={el => (this.provocationContainer = el as HTMLDivElement)}>
          {this.provocation.length > this.collapsedCardTextLength ? (
            <div>
              {this.isExpandedReadingMode ? <e-text>{this.provocation}</e-text> : <e-text>{this.provocation.substring(0, this.collapsedCardTextLength)}...</e-text>}
              <this.ReadingModeControl></this.ReadingModeControl>
            </div>
          ) : (
            <e-text>{this.provocation}</e-text>
          )}
          <div ref={el => (this.separatorProvocationReference = el as HTMLDivElement)}>
            <l-spacer value={0.5}></l-spacer>
            <l-seperator></l-seperator>
            <l-spacer value={0.5}></l-spacer>
          </div>
          <div ref={el => (this.referenceContainer = el as HTMLDivElement)}>
            {this.reference.length > this.collapsedCardTextLength ? (
              <div>
                {this.isExpandedReadingMode ? <e-text>{this.reference}</e-text> : <e-text>{this.reference.substring(0, this.collapsedCardTextLength)}...</e-text>}
                <this.ReadingModeControl></this.ReadingModeControl>
              </div>
            ) : (
              <e-text>{this.reference}</e-text>
            )}
          </div>
          <l-spacer value={0.5}></l-spacer>
          {this.reference && (
            <e-button action="toggleReference" theme={`${this.isReferencesExpanded ? 'grey' : 'dark'}`}>
              {this.isReferencesExpanded ? 'Hide references' : 'Show references'}
            </e-button>
          )}
        </div>
      </div>
    );
  }
}
