import { Component, Event, EventEmitter, State, Prop, Host, Watch, h } from '@stencil/core';

@Component({
  tag: 'p-basic-card',
  styleUrl: 'p-basic-card.css',
  shadow: true,
})
export class PBasicCard {
  @Event({
    eventName: 'deleteCardEvent',
    bubbles: true,
  })
  deleteCardEventEmitter: EventEmitter;

  @Prop() id: string;
  @Prop() label: string;
  @Prop() description: string;
  @Prop() explanation: string;
  @Prop() question: string;
  @Prop() isExpanded: boolean = true;

  @State() isQuestionExpanded: boolean = true;
  @State() isReferenceExpanded: boolean = false;
  @State() isDescriptionExpanded: boolean = false;

  @Watch('isExpanded')
  watchHandler(newValue: boolean, _oldValue: boolean) {
    if (newValue != _oldValue) {
      this.isQuestionExpanded = newValue;
    }
  }

  componentWillLoad() {
    this.isQuestionExpanded = this.isExpanded;
  }

  handleButtonClick(name: string) {
    if (name === 'toggleQuestion') {
      this.isQuestionExpanded = !this.isQuestionExpanded;
    } else if (name === 'deleteCard') {
      this.deleteCardEventEmitter.emit({
        id: this.id,
      });
    } else if (name === 'toggleReference') {
      this.isReferenceExpanded = !this.isReferenceExpanded;
    } else if (name === 'toggleDefinition') {
      this.isDescriptionExpanded = !this.isDescriptionExpanded;
    }
  }

  private iconSize: string = '1.3em';

  render() {
    return (
      <Host>
        <l-row justifyContent="space-between">
          <div class="card-label">
            <e-text variant="heading">{this.label}</e-text>
          </div>
          <l-row>
            <button onClick={() => this.handleButtonClick('toggleDefinition')} class="control-button">
              {this.isDescriptionExpanded ? <ph-info size={this.iconSize} weight="fill" /> : <ph-info size={this.iconSize} weight="regular" />}
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

        <div class="expanded-container">
          {this.isDescriptionExpanded && (
            <div>
              {' '}
              <e-text>
                <em>{this.description}</em>
              </e-text>
              {this.isQuestionExpanded && <div class="seperator"></div>}
            </div>
          )}
          {this.isQuestionExpanded && (
            <div>
              <e-text>{this.explanation}</e-text>
              <l-spacer value={0.5}></l-spacer>
              {this.question && (
                <div class="question-container">
                  {this.isReferenceExpanded && (
                    <div>
                      <div class="seperator"></div>
                      <e-text>{this.question}</e-text>
                      <l-spacer value={0.5}></l-spacer>
                    </div>
                  )}
                  <button class={this.isReferenceExpanded ? 'toggle-button hide-button' : 'toggle-button expand-button'} onClick={() => this.handleButtonClick('toggleReference')}>
                    {this.isReferenceExpanded ? 'Hide references' : 'Show references'}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </Host>
    );
  }
}
