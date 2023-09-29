import { Component, Event, EventEmitter, Prop, State, h } from '@stencil/core';
import { gsap } from 'gsap';

@Component({
  tag: 'p-compact-card-2',
  styleUrl: 'p-compact-card-2.css',
  shadow: true,
})
export class PCompactCard2 {
  compactCardContainerEl!: HTMLDivElement;
  definitionContainerEl!: HTMLDivElement;
  questionContainerEl!: HTMLDivElement;
  referenceContainerEl!: HTMLDivElement;

  @Event({
    eventName: 'deleteCardEvent',
    bubbles: true,
  })
  deleteCardEventEmitter: EventEmitter;

  @Prop() id: string;
  @Prop() label: string;

  @Prop() definition: string;
  @Prop() question: string;
  @Prop() reference: string;

  @State() isDefinitionExpanded: boolean = false;
  @State() isQuestionExpanded: boolean = false;
  @State() isReferenceExpanded: boolean = false;
  @State() expansionLabel: string = 'Read more';

  private tl: any = gsap.timeline();

  handleButtonClick(name: string) {
    if (name === 'deleteCard') {
      this.deleteCardEventEmitter.emit({
        id: this.id,
      });
    } else if (name === 'toggleDefinition') {
      this.isDefinitionExpanded = !this.isDefinitionExpanded;
      if (this.isDefinitionExpanded) {
        // this.animateDefinitionExpansion();
      } else {
        // this.animateDefinitionCollapse();
      }
    } else if (name === 'toggleQuestion') {
      this.isQuestionExpanded = !this.isQuestionExpanded;
      if (this.isQuestionExpanded) {
        // this.animateQuestionExpansion();
      } else {
        // this.animateQuestionCollapse();
      }
    } else if (name === 'toggleReference') {
      this.isReferenceExpanded = !this.isReferenceExpanded;
      if (this.isReferenceExpanded) {
        // this.animateReferenceExpansion();
      } else {
        // this.animateReferenceCollapse();
      }
    }

    if (this.isDefinitionExpanded || this.isQuestionExpanded || this.isReferenceExpanded) {
      this.tl.to(this.compactCardContainerEl, { background: '#eee', duration: 0.25 });
    } else {
      this.tl.to(this.compactCardContainerEl, { background: 'white', duration: 0.25 });
    }
  }

  private iconSize: string = '1.5em';

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
        <div class="content-container">
          <e-text>{this.definition}</e-text>
        </div>
        <div class="content-container">
          <e-text>{this.question}</e-text>
        </div>
        <div class="content-container">
          <e-text>{this.reference}</e-text>
          {this.reference.length > 0 && (
            <button class={this.isReferenceExpanded ? 'toggle-button hide-button' : 'toggle-button expand-button'} onClick={() => this.handleButtonClick('toggleReference')}>
              {this.isReferenceExpanded ? 'Hide references' : 'Show references'}
            </button>
          )}
        </div>
      </div>
    );
  }
}
