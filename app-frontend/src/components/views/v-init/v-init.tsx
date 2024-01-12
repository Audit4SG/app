import { Component, FunctionalComponent, Listen, State, Host, h } from '@stencil/core';
import { state } from '../../../global/script';

@Component({
  tag: 'v-init',
  styleUrl: 'v-init.css',
  shadow: true,
})
export class VInit {
  @Listen('inputEvent') handleInputEvent(e) {
    if (e.detail.name === 'journey') {
      state.journey = e.detail.value;
    }
  }

  @State() wizardState: string = 'journeySelection';

  JourneySelection: FunctionalComponent = () => (
    <div>
      <e-text variant="heading">Choose your auditing journey</e-text>
      <l-spacer value={0.5}></l-spacer>
      <e-input type="radio" name="journey" value="selection" checked={state.journey === 'selection' ? true : false} label="I will audit certain topics"></e-input>
      <e-input type="radio" name="journey" value="exploration" checked={state.journey === 'exploration' ? true : false} label="I will explore all the topics"></e-input>
      <l-spacer value={0.5}></l-spacer>
      <l-row direction="row-reverse" justify="space-between">
        <e-button>{state.journey === 'selection' ? 'Next' : 'Start Auditing'}</e-button>
      </l-row>
    </div>
  );

  TopicSelection: FunctionalComponent = () => <div></div>;

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
