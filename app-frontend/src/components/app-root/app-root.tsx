import { Component, Prop, Listen, h } from '@stencil/core';
import { injectHistory, RouterHistory } from '@stencil/router';
import { fetchOntologyData } from '../../global/script/helpers';
import { flattenJsonLd, generateNodes, generateNodeRelations, generateTopics } from './helpers';
import { state } from '../../global/script';
import { generateObjectRelations } from './helpers/generators/generateObjectRelations';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  @Prop() history: RouterHistory;

  @Listen('buttonClick') handle_RouteTo(e) {
    if (e.detail.action === 'route') {
      this.history.push(`${e.detail.value}`, {});
    }
  }

  private rootComponent: string = 'v-init';

  componentWillLoad() {
    if (state.isInitialized) {
      this.rootComponent = 'v-ontology';
    }
  }

  async componentDidLoad() {
    let { success, ontologyData } = await fetchOntologyData();

    if (!success) {
      return alert('❌ Could not fetch ontology data. Please contact the team');
    }

    let flattenedOntologyData: any = await flattenJsonLd(ontologyData);
    let nodes: any = generateNodes(flattenedOntologyData);
    let nodeRelations: any = generateNodeRelations(nodes);
    let objectRelations: any = generateObjectRelations(flattenedOntologyData);
    let topics: any = generateTopics(nodes, nodeRelations);

    state.nodes = JSON.stringify(nodes);
    state.nodeRelations = JSON.stringify(nodeRelations);
    state.objectRelations = JSON.stringify(objectRelations);
    state.topics = JSON.stringify(topics);
  }

  render() {
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" component={`${this.rootComponent}`} exact={true} />
          <stencil-route url="/init" component="v-init" exact={true} />
          <stencil-route url="/ontology" component="v-ontology" exact={true} />
          <stencil-route url="/reading/:sessionId" component="v-reading" exact={true} />
          <stencil-route component="v-catch-all" />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}

injectHistory(AppRoot);
