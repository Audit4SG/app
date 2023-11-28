import { Component, Event, EventEmitter, State, Prop, Listen, Watch, h } from '@stencil/core';
import { gsap } from 'gsap';

@Component({
  tag: 'p-basic-card-2',
  styleUrl: 'p-basic-card-2.css',
  shadow: true,
})
export class PBasicCard2 {
  basicCardContainerEl!: HTMLDivElement;
  definitionContainerEl!: HTMLDivElement;
  questionContainerEl!: HTMLDivElement;
  referenceContainerEl!: HTMLDivElement;

  @Event({
    eventName: 'deleteCardEvent',
    bubbles: true,
  })
  deleteCardEventEmitter: EventEmitter;

  @Listen('event_LinkClick') handle_LinkClick(e) {
    if (e.detail.action === 'toggleBasicCard') {
      this.isBasicCardExpanded = !this.isBasicCardExpanded;
      if (this.isBasicCardExpanded) {
        this.animateBasicCardExpansion();
        this.expansionLabel = 'Hide';
      } else {
        this.animateBasicCardContraction();
        this.expansionLabel = 'Read more';
      }
    }
  }

  @Prop() id: string;
  @Prop() label: string;

  @Prop() description: string;
  @Prop() provocation: string;
  @Prop() references: string;

  @Prop() isExpanded: boolean = true;

  @State() isDefinitionExpanded: boolean = false;
  @State() isQuestionExpanded: boolean = true;
  @State() isReferenceExpanded: boolean = false;
  @State() expansionLabel: string = 'Read more';

  @State() isBasicCardExpanded: boolean = false;

  @Watch('isExpanded')
  watchHandler(newValue: boolean, _oldValue: boolean) {
    if (newValue != _oldValue) {
      this.isQuestionExpanded = newValue;
      this.animateAllCardCollapse();
    }
  }

  componentWillLoad() {
    this.isQuestionExpanded = this.isExpanded;
  }

  componentDidLoad() {
    this.initCardSection();
  }

  initCardSection() {
    this.definitionContainerEl.style.overflow = 'hidden';
    this.definitionContainerEl.style.height = '0px';

    if (this.isQuestionExpanded) {
      this.questionContainerEl.style.height = 'auto';
    } else {
      this.questionContainerEl.style.overflow = 'hidden';
      this.questionContainerEl.style.height = '0px';
    }

    this.referenceContainerEl.style.overflow = 'hidden';
    this.referenceContainerEl.style.height = '0px';
  }

  private thresholdLength: number = 140;
  private tl: any = gsap.timeline();

  handleButtonClick(name: string) {
    if (name === 'toggleDefinition') {
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
    } else if (name === 'deleteCard') {
      this.deleteCardEventEmitter.emit({
        id: this.id,
      });
    }
  }

  animateAllCardCollapse() {
    this.tl.to([this.questionContainerEl, this.definitionContainerEl, this.referenceContainerEl], { overflow: 'hidden', duration: 0 });
    this.tl.to([this.questionContainerEl, this.definitionContainerEl, this.referenceContainerEl], { height: '0px', duration: 0.25 });
  }

  animateBasicCardExpansion() {
    this.tl.to(this.basicCardContainerEl, { width: '600px', duration: 0.25 });
  }
  animateBasicCardContraction() {
    this.tl.to(this.basicCardContainerEl, { width: '280px', duration: 0.25 });
  }

  animateDefinitionExpansion() {
    this.tl.to(this.definitionContainerEl, { height: 'auto', duration: 0.25 });
  }
  animateDefinitionCollapse() {
    this.tl.to(this.definitionContainerEl, { overflow: 'hidden', duration: 0 });
    this.tl.to(this.definitionContainerEl, { height: '0px', duration: 0.25 });
  }

  animateQuestionExpansion() {
    this.tl.to(this.questionContainerEl, { height: 'auto', duration: 0.25 });
  }
  animateQuestionCollapse() {
    this.tl.to(this.questionContainerEl, { overflow: 'hidden', duration: 0 });
    this.tl.to(this.questionContainerEl, { height: '0px', duration: 0.25 });
  }

  animateReferenceExpansion() {
    this.tl.to(this.referenceContainerEl, { height: 'auto', duration: 0.25 });
  }
  animateReferenceCollapse() {
    this.tl.to(this.referenceContainerEl, { overflow: 'hidden', duration: 0 });
    this.tl.to(this.referenceContainerEl, { height: '0px', duration: 0.25 });
  }

  private iconSize: string = '1.5em';

  render() {
    return (
      <div class="basic-card-container" ref={el => (this.basicCardContainerEl = el as HTMLDivElement)}>
        <header>
          <l-row justifyContent="space-between">
            <div class="card-label">
              <e-text variant="heading">{this.label}</e-text>
            </div>
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
          </l-row>
        </header>
        <l-spacer value={1} />
        <div ref={el => (this.definitionContainerEl = el as HTMLDivElement)}>
          {' '}
          {this.description.length > this.thresholdLength ? (
            <e-text>
              {this.isBasicCardExpanded ? (
                this.description
              ) : (
                <span>
                  {' '}
                  <em>{this.description.substring(0, this.thresholdLength)}</em>
                  ...
                </span>
              )}{' '}
              <e-link event={true} action="toggleBasicCard">
                {this.expansionLabel}
              </e-link>
            </e-text>
          ) : (
            <e-text>
              <em>{this.description}</em>
            </e-text>
          )}
          {this.isQuestionExpanded && <div class="seperator"></div>}
        </div>
        <div ref={el => (this.questionContainerEl = el as HTMLDivElement)}>
          {this.provocation.length > this.thresholdLength ? (
            <e-text>
              {this.isBasicCardExpanded ? (
                this.provocation
              ) : (
                <span>
                  {' '}
                  {this.provocation.substring(0, this.thresholdLength)}
                  ...
                </span>
              )}{' '}
              <e-link event={true} action="toggleBasicCard">
                {this.expansionLabel}
              </e-link>
            </e-text>
          ) : (
            <e-text>{this.provocation}</e-text>
          )}
          <l-spacer value={0.5}></l-spacer>
          <div ref={el => (this.referenceContainerEl = el as HTMLDivElement)}>
            <div class="seperator"></div>
            {this.references.length > this.thresholdLength ? (
              <e-text>
                {this.isBasicCardExpanded ? (
                  this.references
                ) : (
                  <span>
                    {' '}
                    {this.references.substring(0, this.thresholdLength)}
                    ...
                  </span>
                )}{' '}
                <e-link event={true} action="toggleBasicCard">
                  {this.expansionLabel}
                </e-link>
              </e-text>
            ) : (
              <e-text>{this.references}</e-text>
            )}
            <l-spacer value={0.5}></l-spacer>
          </div>

          {this.references.length > 0 && (
            <button class={this.isReferenceExpanded ? 'toggle-button hide-button' : 'toggle-button expand-button'} onClick={() => this.handleButtonClick('toggleReference')}>
              {this.isReferenceExpanded ? 'Hide references' : 'Show references'}
            </button>
          )}
        </div>
      </div>
    );
  }
}
