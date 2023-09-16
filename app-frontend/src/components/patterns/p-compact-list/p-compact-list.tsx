import { Component, Event, EventEmitter, Prop, Watch, State, h } from '@stencil/core';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin);

@Component({
  tag: 'p-compact-list',
  styleUrl: 'p-compact-list.css',
  shadow: true,
})
export class PCompactList {
  compactListDivElement!: HTMLDivElement;
  mainListElement!: HTMLElement;
  downloadButtonContainer!: HTMLDivElement;

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

  @Watch('stack')
  watchHandler(newValue: string, _oldValue: string) {
    if (newValue != _oldValue) {
      this.cardStack = [];
      this.cardStack = JSON.parse(newValue);
      this.cardStack = [...this.cardStack];
    }
  }

  handleButtonClick(name: string) {
    if (name === 'toggleExpansion') {
      if (this.isExpanded) {
        this.animateContraction();
      } else {
        this.animateExpansion();
      }
      this.isExpanded = !this.isExpanded;
    } else if (name === 'deleteAllCards') {
      let decision = confirm('Are you sure you want to delete all cards?');
      if (decision) {
        this.deleteAllCardsEventEmitter.emit({});
      }
    }
  }

  private tl: any = gsap.timeline();

  animateExpansion() {
    this.tl.to(this.compactListDivElement, { width: '500px', height: 'auto', duration: 0.25 });
    this.tl.to(this.downloadButtonContainer, { display: 'block', duration: 0 });
    this.tl.to(this.downloadButtonContainer, { opacity: 1, duration: 0.25 });
    this.tl.to(this.mainListElement, { opacity: 1, duration: 0.25 });
  }

  animateContraction() {
    this.tl.to(this.mainListElement, { opacity: 0, duration: 0.25 });
    this.tl.to(this.downloadButtonContainer, { opacity: 1, duration: 0.25 });
    this.tl.to(this.downloadButtonContainer, { display: 'none', duration: 0 });
    this.tl.to(this.compactListDivElement, { width: '250px', height: '32px', duration: 0.25 });
  }

  render() {
    return (
      <div class="compact-list-container" ref={el => (this.compactListDivElement = el as HTMLDivElement)}>
        <header>
          <l-row justifyContent="space-between">
            <e-text variant="heading">
              Selected <span class="highlight">{this.cardStack.length} nodes</span>
            </e-text>

            <div class="download-button-container" ref={el => (this.downloadButtonContainer = el as HTMLDivElement)}>
              <button class="download-pdf-button">Download PDF</button>
            </div>
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
        <main ref={el => (this.mainListElement = el as HTMLElement)}>
          <div class="column column-1">
            {this.cardStack.map(
              (card: any, index: any) =>
                index % 2 === 0 && (
                  <p-compact-card id={card.id} label={card.label} description={card.description} explanation={card.explanation} question={card.question}></p-compact-card>
                ),
            )}
          </div>
          <div class="column column-2">
            {this.cardStack.map(
              (card: any, index: any) =>
                index % 2 != 0 && (
                  <p-compact-card id={card.id} label={card.label} description={card.description} explanation={card.explanation} question={card.question}></p-compact-card>
                ),
            )}
          </div>
        </main>
      </div>
    );
  }
}
