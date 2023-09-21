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
                {this.isInfoVisible ? <ion-icon name="information-circle"></ion-icon> : <ion-icon name="information-outline"></ion-icon>}
              </button>
              &nbsp;
              <button onClick={() => this.handleButtonClick('toggleDescription')} class="control-button">
                {this.isDescriptionVisible ? <ion-icon name="remove-circle-outline"></ion-icon> : <ion-icon name="add-outline"></ion-icon>}
              </button>
              &nbsp;
              <button onClick={() => this.handleButtonClick('deleteCard')} class="control-button">
                <ion-icon name="close-outline"></ion-icon>{' '}
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
