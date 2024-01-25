import { Component, State, Listen, h } from '@stencil/core';
import { state } from '../../../global/script';
import { gsap } from 'gsap';

@Component({
  tag: 'p-topic-list',
  styleUrl: 'p-topic-list.css',
  shadow: true,
})
export class PTopicList {
  listContainer!: HTMLDivElement;

  @Listen('buttonClick') handleButtonClick(e) {
    if (e.detail.action === 'toggleTopicList') {
      if (!this.isTopicListExpanded) {
        this.tl.to(this.listContainer, { overflow: 'hidden', duration: 0 });
        this.tl.to(this.listContainer, { height: '25px', duration: 0.25 });
        this.tl.to(this.listContainer, { width: '120px', duration: 0.25 });
      } else {
        this.tl.to(this.listContainer, { width: 'auto', duration: 0.25 });
        this.tl.to(this.listContainer, { overflow: 'auto', duration: 0 });
        this.tl.to(this.listContainer, { height: 'auto', duration: 0.25 });
      }
      this.isTopicListExpanded = !this.isTopicListExpanded;
    }
  }

  @State() journey: string;
  @State() isTopicListExpanded: boolean = false;
  @State() topics: any = [];
  @State() cardStack: any = [];

  private tl: any = gsap.timeline();

  componentWillLoad() {
    this.topics = JSON.parse(state.topics);
    this.topics = [...this.topics];
    if (state.cardStack.length > 0) {
      this.cardStack = JSON.parse(state.cardStack);
      this.cardStack = [...this.cardStack];
    }
  }

  isTopicSelected(topicToCheck) {
    let isSelected: boolean = false;
    this.cardStack.map(item => {
      if (item.id === topicToCheck) {
        isSelected = true;
      }
    });
    return isSelected;
  }

  render() {
    return (
      <div class="topic-list-container" ref={el => (this.listContainer = el as HTMLDivElement)}>
        <l-row justify="space-between">
          <e-text>Topics</e-text>
          <e-button variant="transparent" action="toggleTopicList">
            {!this.isTopicListExpanded ? <ph-minus-circle size="1.25em" /> : <ph-caret-circle-down size="1.25em" />}
          </e-button>
        </l-row>
        <l-spacer value={1}></l-spacer>
        <main>
          {this.topics.map(topic => (
            <l-row justify="space-between">
              <e-input type="checkbox" name="topicSelection" value={topic.value} label={topic.label} checked={this.isTopicSelected(topic.value)}></e-input>
              <e-link event={true} action="flyTo" value={topic.value}>
                <ph-map-pin color="#08f26e"></ph-map-pin>
              </e-link>
            </l-row>
          ))}
        </main>
      </div>
    );
  }
}
