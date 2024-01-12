import { Component, Prop, FunctionalComponent, Listen, State, Host, h } from '@stencil/core';
import { injectHistory, RouterHistory } from '@stencil/router';
import { generateTopics } from './helpers';
import { state } from '../../../global/script';

@Component({
  tag: 'v-init',
  styleUrl: 'v-init.css',
  shadow: true,
})
export class VInit {
  @Prop() history: RouterHistory;

  @State() isStartAuditDisabled: boolean = true;
  @State() wizardState: string = 'journeySelection';
  @State() topics: any;
  @State() selectedTopics: any = [];

  @Listen('buttonClick') handleButtonClick(e) {
    if (e.detail.action === 'selectTopics') {
      this.topics = generateTopics(JSON.parse(state.nodes), JSON.parse(state.nodeRelations));
      this.topics = [...this.topics];
      this.wizardState = 'topicSelection';
    } else if (e.detail.action === 'backToJourneySelection') {
      this.wizardState = 'journeySelection';
    } else if (e.detail.action === 'startAuditing') {
      state.isInitialized = true;
      this.history.push('/ontology', {});
    }
  }

  @Listen('inputEvent') handleInputEvent(e) {
    if (e.detail.name === 'journey') {
      state.journey = e.detail.value;
    } else if (e.detail.name === 'topicSelection') {
      console.log(`${e.detail.value}: ${e.detail.isChecked}`);
      if (e.detail.isChecked) {
        // Push into card stack
      } else {
        // Pop out of card stack
      }
    }
  }

  JourneySelection: FunctionalComponent = () => (
    <div>
      <e-text variant="heading">Choose your auditing journey</e-text>
      <l-spacer value={1}></l-spacer>
      <e-input type="radio" name="journey" value="selection" checked={state.journey === 'selection' ? true : false} label="I will audit certain topics"></e-input>
      <e-input type="radio" name="journey" value="exploration" checked={state.journey === 'exploration' ? true : false} label="I will explore all the topics"></e-input>
      <l-spacer value={1}></l-spacer>
      <l-row direction="row-reverse" justify="space-between">
        <e-button action={state.journey === 'selection' ? 'selectTopics' : 'startAuditing'}>{state.journey === 'selection' ? 'Next' : 'Start Auditing'}</e-button>
      </l-row>
    </div>
  );

  TopicSelection: FunctionalComponent = () => (
    <div>
      <e-text variant="heading">Choose topics</e-text>
      <l-spacer value={1}></l-spacer>
      <c-fadebox maxHeight="600px" overflow="scroll">
        {this.topics.map(topic => (
          <e-input type="checkbox" name="topicSelection" value={topic.value} label={topic.label}></e-input>
        ))}
      </c-fadebox>
      <l-spacer value={1}></l-spacer>
      <div class="row">
        <e-button variant="secondary" action="backToJourneySelection">
          Back
        </e-button>
        <e-button action="startAuditing" disabled={this.isStartAuditDisabled}>
          Start Auditing
        </e-button>
      </div>
    </div>
  );

  render() {
    return (
      <Host>
        <c-card theme="green">
          {this.wizardState === 'journeySelection' && <this.JourneySelection></this.JourneySelection>}
          {this.wizardState === 'topicSelection' && <this.TopicSelection></this.TopicSelection>}
        </c-card>
      </Host>
    );
  }
}

injectHistory(VInit);
