import { Component, Prop, Listen, h } from '@stencil/core';
import { injectHistory, RouterHistory } from '@stencil/router';

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

  render() {
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" component="v-proto" exact={true} />
          {/* <stencil-route url="/" component={!state.isInitialized ? 'v-init' : 'v-ontology'} exact={true} /> */}
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
