import { Component, Event, EventEmitter, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'p-compact-list',
  styleUrl: 'p-compact-list.css',
  shadow: true,
})
export class PCompactList {
  @Event({
    eventName: 'deleteAllCardsEvent',
    bubbles: true,
  })
  deleteAllCardsEventEmitter: EventEmitter;

  @Prop() stack: string;

  @State() isExpanded: boolean = false;

  componentWillLoad() {
    this.cardStack = JSON.parse(this.stack);
  }

  @State() cardStack: any;

  handleButtonClick(name: string) {
    if (name === 'toggleExpansion') {
      this.isExpanded = !this.isExpanded;
    } else if (name === 'deleteAllCards') {
      let decision = confirm('Are you sure you want to delete all cards?');
      if (decision) {
        this.deleteAllCardsEventEmitter.emit({});
      }
    }
  }

  render() {
    return (
      <div class="compact-list-container">
        <header>
          <l-row justifyContent="space-between">
            <e-text variant="heading">
              Selected <span class="highlight">{this.cardStack.length} nodes</span>
            </e-text>
            <l-row>
              <button onClick={() => this.handleButtonClick('deleteAllCards')} class="control-button">
                <ion-icon name="close-outline"></ion-icon>{' '}
              </button>
              &nbsp;
              <button onClick={() => this.handleButtonClick('toggleExpansion')} class="control-button">
                {this.isExpanded ? <ion-icon name="remove-outline"></ion-icon> : <ion-icon name="add-outline"></ion-icon>}
              </button>
            </l-row>
          </l-row>{' '}
        </header>
      </div>
    );
  }
}
