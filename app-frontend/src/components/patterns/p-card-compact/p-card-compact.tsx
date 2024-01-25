import { Component, Event, Listen, EventEmitter, Prop, State, h } from '@stencil/core';
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
    eventName: 'showModal',
    bubbles: true,
  })
  event_showModal: EventEmitter;

  @Prop() nodeId: string;
  @Prop() label: string;
  @Prop() description: string;
  @Prop() provocation: string;
  @Prop() references: string;

  @State() isDefinitionExpanded: boolean = false;
  @State() isQuestionExpanded: boolean = false;
  @State() isReferenceExpanded: boolean = false;

  @Listen('event_LinkClick') handle_LinkClick(e) {
    if (e.detail.action === 'showModal') {
      this.event_showModal.emit({
        label: this.label,
        description: this.description,
        provocation: this.provocation,
        references: this.references,
      });
    }
  }

  private tl: any = gsap.timeline();

  handleButtonClick(name: string) {
    if (name === 'deleteCard') {
      this.deleteCardEventEmitter.emit({
        id: this.nodeId,
      });
    } else if (name === 'toggleDefinition') {
      this.isDefinitionExpanded = !this.isDefinitionExpanded;
      if (this.isDefinitionExpanded) {
        this.animateDefinitionExpansion();
      } else {
        this.animateDefinitionCollapse();
      }
    } else if (name === 'toggleQuestion') {
      this.isQuestionExpanded = !this.isQuestionExpanded;
      if (this.isQuestionExpanded) {
        this.animateQuestionExpansion();
      } else {
        this.animateQuestionCollapse();
      }
    } else if (name === 'toggleReference') {
      this.isReferenceExpanded = !this.isReferenceExpanded;
      if (this.isReferenceExpanded) {
        this.animateReferenceExpansion();
      } else {
        this.animateReferenceCollapse();
      }
    }

    if (this.isDefinitionExpanded || this.isQuestionExpanded || this.isReferenceExpanded) {
      this.tl.to(this.compactCardContainerEl, { position: 'relative', zIndex: 999, background: '#eee', duration: 0.25 });
    } else {
      this.tl.to(this.compactCardContainerEl, { position: 'static', zIndex: 0, background: 'white', duration: 0.25 });
    }
  }

  animateDefinitionExpansion() {
    this.tl.to(this.definitionContainerEl, { height: 'auto', duration: 0.25 });
  }
  animateDefinitionCollapse() {
    this.tl.to(this.definitionContainerEl, { overflow: 'hidden', duration: 0 });
    this.tl.to(this.definitionContainerEl, { height: '0px', duration: 0.25 });
  }

  animateQuestionExpansion() {
    this.tl.to([this.questionContainerEl, this.referenceButtonContainerEl], { height: 'auto', duration: 0.25 });
  }
  animateQuestionCollapse() {
    this.tl.to([this.questionContainerEl, this.referenceButtonContainerEl], { overflow: 'hidden', duration: 0 });
    this.tl.to([this.referenceButtonContainerEl, this.questionContainerEl], { height: '0px', duration: 0.25 });
  }

  animateReferenceExpansion() {
    this.tl.to(this.referenceContainerEl, { height: 'auto', duration: 0.25 });
  }
  animateReferenceCollapse() {
    this.tl.to(this.referenceContainerEl, { overflow: 'hidden', duration: 0 });
    this.tl.to(this.referenceContainerEl, { height: '0px', duration: 0.25 });
  }

  private iconSize: string = '1.25em';
  private thresholdLength: number = 140;

  render() {
    return (
      <div class="compact-card__container" ref={el => (this.compactCardContainerEl = el as HTMLDivElement)}>
        <header>
          <div class="header-item-1">
            <e-text>{this.label}</e-text>
          </div>
          <div class="header-item-2">
            <l-row>
              <button onClick={() => this.handleButtonClick('toggleDefinition')} class="control-button">
                {this.isDefinitionExpanded ? <ph-info size={this.iconSize} weight="fill" /> : <ph-info size={this.iconSize} weight="regular" />}
              </button>
              &nbsp;
              <button onClick={() => this.handleButtonClick('toggleQuestion')} class="control-button">
                {this.isQuestionExpanded ? <ph-minus-circle size={this.iconSize} /> : <ph-caret-circle-down size={this.iconSize} />}
              </button>
              &nbsp;
              <button onClick={() => this.handleButtonClick('deleteCard')} class="control-button">
                <ph-x-circle size={this.iconSize} />
              </button>
            </l-row>
          </div>
        </header>
        <l-spacer value={0.5}></l-spacer>
        <div class="content-container" ref={el => (this.definitionContainerEl = el as HTMLDivElement)}>
          {this.description.length > this.thresholdLength ? (
            <e-text>
              <em>{this.description.substring(0, this.thresholdLength)}</em>
              ...
              <e-link event={true} action="showModal">
                Read more
              </e-link>
            </e-text>
          ) : (
            <e-text>
              <em>{this.description}</em>
            </e-text>
          )}
          {this.isQuestionExpanded && <div class="seperator"></div>}
        </div>
        <div class="content-container" ref={el => (this.questionContainerEl = el as HTMLDivElement)}>
          {this.provocation.length > this.thresholdLength ? (
            <e-text>
              {this.provocation.substring(0, this.thresholdLength)}
              ...
              <e-link event={true} action="showModal">
                Read more
              </e-link>
            </e-text>
          ) : (
            <e-text>{this.provocation}</e-text>
          )}
          {this.isReferenceExpanded && <div class="seperator"></div>}
        </div>
        <div class="content-container" ref={el => (this.referenceContainerEl = el as HTMLDivElement)}>
          {this.references.length > this.thresholdLength ? (
            <e-text>
              {this.references.substring(0, this.thresholdLength)}
              ...
              <e-link event={true} action="showModal">
                Read more
              </e-link>
            </e-text>
          ) : (
            <e-text>{this.references}</e-text>
          )}
        </div>
        {this.references.length > 0 && <l-spacer value={1}></l-spacer>}
        <div class="content-container" ref={el => (this.referenceButtonContainerEl = el as HTMLDivElement)}>
          {this.references.length > 0 && this.isQuestionExpanded && (
            <button class={this.isReferenceExpanded ? 'toggle-button hide-button' : 'toggle-button expand-button'} onClick={() => this.handleButtonClick('toggleReference')}>
              {this.isReferenceExpanded ? 'Hide references' : 'Show references'}
            </button>
          )}
        </div>
      </div>
    );
  }
}
