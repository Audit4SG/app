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

  @State() isCardExpanded: boolean = true;
  @State() isQuestionExpanded: boolean = false;

  @Watch('isExpanded')
  watchHandler(newValue: boolean, _oldValue: boolean) {
    if (newValue != _oldValue) {
      this.isCardExpanded = newValue;
    }
  }

  componentWillLoad() {
    this.isCardExpanded = this.isExpanded;
  }

  handleButtonClick(name: string) {
    if (name === 'toggleCardExpansion') {
      this.isCardExpanded = !this.isCardExpanded;
    } else if (name === 'deleteCard') {
      this.deleteCardEventEmitter.emit({
        id: this.id,
      });
    } else if (name === 'toggleQuestion') {
      this.isQuestionExpanded = !this.isQuestionExpanded;
    }
  }

  render() {
    return (
      <Host>
        <l-row justifyContent="space-between">
          <div></div>
          <l-row>
            <button onClick={() => this.handleButtonClick('toggleCardExpansion')} class="control-button">
              {this.isCardExpanded ? <ion-icon name="remove-outline"></ion-icon> : <ion-icon name="add-outline"></ion-icon>}
            </button>
            &nbsp;
            <button onClick={() => this.handleButtonClick('deleteCard')} class="control-button">
              <ion-icon name="close-outline"></ion-icon>{' '}
            </button>
          </l-row>
        </l-row>
        <e-text variant="heading">{this.label}</e-text>
        {this.isCardExpanded && (
          <div class="expanded-container">
            <e-text>{this.description}</e-text>
            <div class="seperator"></div>
            <e-text>{this.explanation}</e-text>
            <l-spacer value={0.5}></l-spacer>
            {this.question && (
              <div class="question-container">
                {this.isQuestionExpanded && (
                  <div>
                    <div class="seperator"></div>
                    <e-text>{this.question}</e-text>
                    <l-spacer value={0.5}></l-spacer>
                  </div>
                )}
                <button class={this.isQuestionExpanded ? 'toggle-button hide-button' : 'toggle-button expand-button'} onClick={() => this.handleButtonClick('toggleQuestion')}>
                  {this.isQuestionExpanded ? 'Hide questions' : 'Click here for questions'}
                </button>
              </div>
            )}
          </div>
        )}
      </Host>
    );
  }
}
