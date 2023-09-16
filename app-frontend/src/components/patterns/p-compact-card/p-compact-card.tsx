import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'p-compact-card',
  styleUrl: 'p-compact-card.css',
  shadow: true,
})
export class PCompactCard {
  @Prop() id: string;
  @Prop() label: string;
  @Prop() description: string;
  @Prop() explanation: string;
  @Prop() question: string;

  handleButtonClick(name: string) {
    console.log(name);
  }

  render() {
    return (
      <Host>
        <header>
          <div class="header-item-1">
            <e-text>{this.label}</e-text>
          </div>
          <l-row>
            <button onClick={() => this.handleButtonClick('deleteAllCards')} class="control-button">
              <ion-icon name="information-outline"></ion-icon>{' '}
            </button>
            &nbsp;
            <button onClick={() => this.handleButtonClick('deleteAllCards')} class="control-button">
              <ion-icon name="add-outline"></ion-icon>{' '}
            </button>
            &nbsp;
            <button onClick={() => this.handleButtonClick('deleteAllCards')} class="control-button">
              <ion-icon name="close-outline"></ion-icon>{' '}
            </button>
          </l-row>
        </header>
      </Host>
    );
  }
}
