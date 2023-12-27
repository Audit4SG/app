import { Component, Prop, Listen, h } from '@stencil/core';
import { RouterHistory, injectHistory } from '@stencil/router';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  @Prop() history: RouterHistory;

  @Listen('event_RouteTo') handle_RouteTo(e) {
    if (e.detail.type === 'push') {
      this.history.push(e.detail.route, e.detail.data);
    } else if (e.detail.type === 'goBack') {
      this.history.goBack();
    }
  }

  render() {
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" component="demo-20a" exact={true} />
          <stencil-route url="/reading/:sessionId" component="demo-20b" exact={true} />
          <stencil-route url="/test" component="c-test" exact={true} />
          <stencil-route component="v-catch-all" />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}

injectHistory(AppRoot);
