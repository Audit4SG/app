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
          <stencil-route url="/" component="v-home" exact={true} />
          <stencil-route url="/demo-1" component="demo-1" exact={true} />
          <stencil-route url="/demo-2" component="demo-2" exact={true} />
          <stencil-route url="/demo-3" component="demo-3" exact={true} />
          <stencil-route url="/demo-4" component="demo-4" exact={true} />
          <stencil-route url="/demo-5" component="demo-5" exact={true} />
          <stencil-route url="/demo-6" component="demo-6" exact={true} />
          <stencil-route url="/demo-7" component="demo-7" exact={true} />
          <stencil-route url="/demo-8" component="demo-8" exact={true} />
          <stencil-route url="/demo-9" component="demo-9" exact={true} />
          <stencil-route url="/demo-10" component="demo-10" exact={true} />
          <stencil-route url="/demo-11" component="demo-11" exact={true} />
          <stencil-route url="/demo-12" component="demo-12" exact={true} />
          <stencil-route url="/demo-13" component="demo-13" exact={true} />
          <stencil-route url="/demo-13b" component="demo-13b" exact={true} />
          <stencil-route url="/demo-13c" component="demo-13c" exact={true} />
          <stencil-route url="/demo-13d" component="demo-13d" exact={true} />
          <stencil-route url="/demo-14" component="demo-14" exact={true} />
          <stencil-route url="/demo-15" component="demo-15" exact={true} />
          <stencil-route url="/demo-16" component="demo-16" exact={true} />
          <stencil-route url="/demo-17" component="demo-17" exact={true} />
          <stencil-route url="/demo-17b" component="demo-17b" exact={true} />
          <stencil-route url="/demo-17c" component="demo-17c" exact={true} />
          <stencil-route url="/demo-17d" component="demo-17d" exact={true} />
          <stencil-route component="v-catch-all" />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}

injectHistory(AppRoot);
