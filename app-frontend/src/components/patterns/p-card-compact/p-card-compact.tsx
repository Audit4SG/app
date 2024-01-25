import { Component, Event, Listen, FunctionalComponent, EventEmitter, Prop, State, h } from '@stencil/core';
import { gsap } from 'gsap';

@Component({
  tag: 'p-card-compact',
  styleUrl: 'p-card-compact.css',
  shadow: true,
})
export class PCardCompact {
  compactCardContainerEl!: HTMLDivElement;
  definitionContainerEl!: HTMLDivElement;
  questionContainerEl!: HTMLDivElement;
  referenceContainerEl!: HTMLDivElement;
  referenceButtonContainerEl!: HTMLDivElement;

  @Event({
    eventName: 'deleteCardEvent',
    bubbles: true,
  })
  deleteCardEventEmitter: EventEmitter;

  @Event({
    eventName: 'openModal',
    bubbles: true,
  })
  openModal: EventEmitter;

  @Prop() nodeId: string;
  @Prop() label: string;
  @Prop() description: string;
  @Prop() provocation: string;
  @Prop() references: string;

  @State() isDefinitionExpanded: boolean = false;
  @State() isProvocationExpanded: boolean = false;
  @State() isReferencesExpanded: boolean = false;

  @Listen('event_LinkClick') handle_LinkClick(e) {
    if (e.detail.action === 'viewInModal') {
      this.openModal.emit({
        label: this.label,
        definition: this.description,
        provocation: this.provocation,
        references: this.references,
      });
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

  private tl: any = gsap.timeline();

  toggleDefinition() {
    this.isDefinitionExpanded = !this.isDefinitionExpanded;
    if (!this.isDefinitionExpanded) {
      this.tl.to(this.definitionContainerEl, { overflow: 'hidden', duration: 0 });
      this.tl.to(this.definitionContainerEl, { height: '0px', duration: 0.25 });
    } else {
      this.tl.to(this.definitionContainerEl, { height: 'auto', duration: 0.25 });
    }
    this.toggleCardDepth();
  }

  toggleProvocation() {
    this.isProvocationExpanded = !this.isProvocationExpanded;
    if (!this.isProvocationExpanded) {
      this.tl.to([this.questionContainerEl, this.referenceButtonContainerEl], { overflow: 'hidden', duration: 0 });
      this.tl.to([this.referenceButtonContainerEl, this.questionContainerEl], { height: '0px', duration: 0.25 });
    } else {
      this.tl.to([this.questionContainerEl, this.referenceButtonContainerEl], { height: 'auto', duration: 0.25 });
    }
    this.toggleCardDepth();
  }

  toggleReference() {
    this.isReferencesExpanded = !this.isReferencesExpanded;
    if (!this.isReferencesExpanded) {
      this.tl.to(this.referenceContainerEl, { overflow: 'hidden', duration: 0 });
      this.tl.to(this.referenceContainerEl, { height: '0px', duration: 0.25 });
    } else {
      this.tl.to(this.referenceContainerEl, { height: 'auto', duration: 0.25 });
    }
    this.toggleCardDepth();
  }

  toggleCardDepth() {
    if (this.isDefinitionExpanded || this.isProvocationExpanded || this.isReferencesExpanded) {
      this.tl.to(this.compactCardContainerEl, { position: 'relative', zIndex: 999, background: '#eee', duration: 0.25 });
    } else {
      this.tl.to(this.compactCardContainerEl, { position: 'static', zIndex: 0, background: 'white', duration: 0.25 });
    }
  }

  private thresholdLength: number = 120;

  ModalReadingOption: FunctionalComponent = () => (
    <e-link event={true} action="viewInModal" variant="readMore">
      Read more
    </e-link>
  );

  render() {
    return (
      <div class="compact-card__container" ref={el => (this.compactCardContainerEl = el as HTMLDivElement)}>
        <header>
          <div class="header-item-1">
            <e-text>{this.label}</e-text>
          </div>
          <div class="header-item-2">
            <l-row>
              <e-button variant="transparent" action="toggleDefinition">
                {this.isDefinitionExpanded ? <ph-info size="1.25em" weight="fill" /> : <ph-info size="1.25em" weight="regular" />}
              </e-button>
              <e-button variant="transparent" action="toggleProvocation">
                {this.isProvocationExpanded ? <ph-minus-circle size="1.25em" /> : <ph-caret-circle-down size="1.25em" />}
              </e-button>
              <e-button variant="transparent" action="deleteCard" value={this.nodeId}>
                <ph-x-circle size="1.25em" />
              </e-button>
            </l-row>
          </div>
        </header>
        <l-spacer value={0.5}></l-spacer>
        <div class="content-container" ref={el => (this.definitionContainerEl = el as HTMLDivElement)}>
          {this.description.length > this.thresholdLength ? (
            <div>
              <e-text>
                <em>{this.description.substring(0, this.thresholdLength)}</em>
                ...
              </e-text>
              <this.ModalReadingOption></this.ModalReadingOption>
            </div>
          ) : (
            <e-text>
              <em>{this.description}</em>
            </e-text>
          )}
          {this.isProvocationExpanded && <div class="seperator"></div>}
        </div>
        <div class="content-container" ref={el => (this.questionContainerEl = el as HTMLDivElement)}>
          {this.provocation.length > this.thresholdLength ? (
            <div>
              <e-text>
                {this.provocation.substring(0, this.thresholdLength)}
                ...
              </e-text>
              <this.ModalReadingOption></this.ModalReadingOption>
            </div>
          ) : (
            <e-text>{this.provocation}</e-text>
          )}
          {this.isReferencesExpanded && <div class="seperator"></div>}
        </div>
        <div class="content-container" ref={el => (this.referenceContainerEl = el as HTMLDivElement)}>
          {this.references.length > this.thresholdLength ? (
            <div>
              <e-text>
                {this.references.substring(0, this.thresholdLength)}
                ...
              </e-text>
              <this.ModalReadingOption></this.ModalReadingOption>
            </div>
          ) : (
            <e-text>{this.references}</e-text>
          )}
        </div>
        {this.references.length > 0 && <l-spacer value={0.5}></l-spacer>}
        <div class="content-container" ref={el => (this.referenceButtonContainerEl = el as HTMLDivElement)}>
          {this.references.length > 0 && this.isProvocationExpanded && (
            <e-button action="toggleReference" size="wide" theme={`${this.isReferencesExpanded ? 'grey' : 'dark'}`}>
              {this.isReferencesExpanded ? 'Hide references' : 'Show references'}
            </e-button>
          )}
        </div>
      </div>
    );
  }
}
