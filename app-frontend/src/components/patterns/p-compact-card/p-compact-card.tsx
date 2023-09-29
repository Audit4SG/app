import { Component, Event, EventEmitter, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'p-compact-card',
  styleUrl: 'p-compact-card.css',
  shadow: true,
})
export class PCompactCard {
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

  @State() isInfoVisible: boolean = false;
  @State() isDescriptionVisible: boolean = false;

  handleButtonClick(name: string) {
    if (name === 'deleteCard') {
      this.deleteCardEventEmitter.emit({
        id: this.id,
      });
    } else if (name === 'toggleInformation') {
      this.isInfoVisible = !this.isInfoVisible;
    } else if (name === 'toggleDescription') {
      this.isDescriptionVisible = !this.isDescriptionVisible;
    }
  }

  private iconSize: string = '1.5em';

  render() {
    return (
      <div class={`compact-card__container ${this.isInfoVisible || this.isDescriptionVisible ? 'highlighted' : ''}`}>
        <header>
          <div class="header-item-1">
            <e-text>{this.label}</e-text>
          </div>
          <div class="header-item-2">
            <l-row>
              <button onClick={() => this.handleButtonClick('toggleInformation')} class="control-button">
                {this.isInfoVisible ? <ph-info size={this.iconSize} weight="fill" /> : <ph-info size={this.iconSize} weight="regular" />}
              </button>
              &nbsp;
              <button onClick={() => this.handleButtonClick('toggleDescription')} class="control-button">
                {this.isDescriptionVisible ? <ph-minus-circle size={this.iconSize} /> : <ph-caret-circle-down size={this.iconSize} />}
              </button>
              &nbsp;
              <button onClick={() => this.handleButtonClick('deleteCard')} class="control-button">
                <ph-x-circle size={this.iconSize} />
              </button>
            </l-row>
          </div>
        </header>
        {this.isDescriptionVisible && <main>{this.description}</main>}
        {this.isInfoVisible && <footer>{this.explanation}</footer>}
      </div>
    );
  }
}
