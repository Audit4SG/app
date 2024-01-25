import { Component, State, Host, h } from '@stencil/core';
import { state } from '../../../global/script';

@Component({
  tag: 'p-topic-list',
  styleUrl: 'p-topic-list.css',
  shadow: true,
})
export class PTopicList {
  listContainer!: HTMLDivElement;

  @State() journey: string;
  @State() isTopicListExpanded: boolean = false;
  @State() topics: any = [];
  @State() cardStack: any = [];

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
      <Host>
        <l-row justify="space-between">
          <e-text>Topics</e-text>
          <e-button variant="transparent" action="toggleProvocation">
            {this.isTopicListExpanded ? <ph-minus-circle size="1.25em" /> : <ph-caret-circle-down size="1.25em" />}
          </e-button>
        </l-row>
        <l-spacer value={1}></l-spacer>
        <main ref={el => (this.listContainer = el as HTMLDivElement)}>
          {this.topics.map(topic => (
            <l-row justify="space-between">
              <e-input type="checkbox" name="topicSelection" value={topic.value} label={topic.label} checked={this.isTopicSelected(topic.value)}></e-input>
              <e-link event={true} action="flyTo" value={topic.value}>
                <ph-map-pin color="#08f26e"></ph-map-pin>
              </e-link>
            </l-row>
          ))}
        </main>
      </Host>
    );
  }
}
