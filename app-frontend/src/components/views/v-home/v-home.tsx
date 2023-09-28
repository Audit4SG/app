import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'v-home',
  styleUrl: 'v-home.css',
  shadow: true,
})
export class VHome {
  @State() list: any = [];

  render() {
    return (
      <Host>
        <br />
        <h1>Demos</h1>
        <ul>
          <li>
            <e-text>
              <strong>D14. Improvements added to D13</strong>
              <br />
              Implements visual and interaction refinements derived from all the versions of D13
            </e-text>
            <l-spacer value={0.5}></l-spacer>
            <stencil-route-link url="/demo-14">View Demo</stencil-route-link>
          </li>
          <li>
            <e-text>
              <strong>D13 (d). Tooltip on hover + click anywhere or on "x" to close</strong>
              <br />
              Everything in D13 but tooltip appears on hover and closes if clicked anywhere on the document/or on the "x" button
            </e-text>
            <l-spacer value={0.5}></l-spacer>
            <stencil-route-link url="/demo-13d">View Demo</stencil-route-link>
          </li>
          <li>
            <e-text>
              <strong>D13 (c). Tooltip on click + card pin button in tooltip</strong>
              <br />
              Everything in D13 but tooltip appears on click and has a button to pin the card
            </e-text>
            <l-spacer value={0.5}></l-spacer>
            <stencil-route-link url="/demo-13c">View Demo</stencil-route-link>
          </li>
          <li>
            <e-text>
              <strong>D13 (b). Tooltip has a timeout before disappearing</strong>
              <br />
              Everything in D13 but tooltip has a certain timeout
            </e-text>
            <l-spacer value={0.5}></l-spacer>
            <stencil-route-link url="/demo-13b">View Demo</stencil-route-link>
          </li>
          <li>
            <e-text>
              <strong>D13 (a). Card selection stack</strong>
              <br />
              Everything in D12 + node hover card + card selection stack
            </e-text>
            <l-spacer value={0.5}></l-spacer>
            <stencil-route-link url="/demo-13">View Demo</stencil-route-link>
          </li>
          <li>
            <e-text>
              <strong>D12. Exploratory vs Class selection</strong>
              <br />
              Introduces an option for users to choose their auditing journey i.e. exploratory or if they want to select a few classes to begin with. Includes node highlighting,
              edge highlighting (for object props) in Selection mode
            </e-text>
            <l-spacer value={0.5}></l-spacer>
            <stencil-route-link url="/demo-12">View Demo</stencil-route-link>
          </li>
          <li>
            <e-text>
              <strong>D11. Minimal repulsion graph + reduces overlaps</strong>
              <br />
              Visualizes RelAIEO as a force-directed graph with minimal repulsive force (almost static). Reduces overlaps among nodes, edges and labels
            </e-text>
            <l-spacer value={0.5}></l-spacer>
            <stencil-route-link url="/demo-11">View Demo</stencil-route-link>
          </li>
          <li>
            <e-text>
              <strong>D10. Force-directed graph, Zoom and Pan</strong>
              <br />
              Visualizes RelAIEO as force-directed graph. Zoom in & zoom out using mouse wheel/trackpad. Pan across the ontology by clicking and dragging the background.
            </e-text>
            <l-spacer value={0.5}></l-spacer>
            <stencil-route-link url="/demo-10">View Demo</stencil-route-link>
          </li>
          <li>
            <e-text>
              <strong>D09. Static graph, Zoom and Pan</strong>
              <br />
              Visualizes RelAIEO as a static graph, without physics and drag feature on nodes. Zoom in & zoom out using mouse wheel/trackpad. Pan across the ontology by clicking
              and dragging the background.
            </e-text>
            <l-spacer value={0.5}></l-spacer>
            <stencil-route-link url="/demo-9">View Demo</stencil-route-link>
          </li>
          <li>
            <e-text>
              <strong>D08. subClass relationship on edges + D07</strong>
              <br />
              subClass (is-a) relationship added to edges + everything in D08
            </e-text>
            <l-spacer value={0.5}></l-spacer>
            <stencil-route-link url="/demo-8">View Demo</stencil-route-link>
          </li>
          <li>
            <e-text>
              <strong>D07. Edge highlight & Node tooltip on hover</strong>
              <br />
              Hovering on a node enlarges it, highlights the path from the <u>hovered node</u> to the root and displays the node URI as tooltip (the URI is a placeholder for the
              node description)
            </e-text>
            <l-spacer value={0.5}></l-spacer>
            <stencil-route-link url="/demo-7">View Demo</stencil-route-link>
          </li>
          <li>
            <e-text>
              <strong>D06. Edge highlight</strong>
              <br />
              Hovering on a node highlights the path from the <u>hovered node</u> to the root. Relationship label on edges not displayed.
            </e-text>
            <l-spacer value={0.5}></l-spacer>
            <stencil-route-link url="/demo-6">View Demo</stencil-route-link>
          </li>
          <li>
            <e-text>
              <strong>D05. Graph node selection + information display (Part-2)</strong>
              <br />
              Everything in D04 + Node list collapses when more than 5 nodes are selected + Includes an expanded view to glance over the contents of selected nodes
            </e-text>
            <l-spacer value={0.5}></l-spacer>
            <stencil-route-link url="/demo-5">View Demo</stencil-route-link>
          </li>
          <li>
            <e-text>
              <strong>D04. Graph node selection + information display (Part-1)</strong>
              <br />
              Select/deselect graph nodes by <u>double clicking</u>. Selected nodes are highlighted in red. Information about selected nodes is displayed in a panel (on the left)
            </e-text>
            <l-spacer value={0.5}></l-spacer>
            <stencil-route-link url="/demo-4">View Demo</stencil-route-link>
          </li>
          <li>
            <e-text>
              <strong>D03. Graph labels inside nodes</strong>
              <br />
              Node labels are displayed inside flexible-width rectangular nodes
            </e-text>
            <l-spacer value={0.5}></l-spacer>
            <stencil-route-link url="/demo-3">View Demo</stencil-route-link>
          </li>
          <li>
            <e-text>
              <strong>D02. Interaction with graph nodes</strong>
              <br />
              Clicking on graph nodes extracts information about the node and is displayed in an <em>alert</em> modal
            </e-text>
            <l-spacer value={0.5}></l-spacer>
            <stencil-route-link url="/demo-2">View Demo</stencil-route-link>
          </li>
          <li>
            <e-text>
              <strong>D01. Basic graph visualization</strong>
              <br />
              The <em>class hierarchy</em> of <a href="https://protege.stanford.edu/ontologies/pizza/pizza.owl">pizza ontology</a> is visualised as a force-directed graph (Nodes
              are non-interactive)
            </e-text>
            <l-spacer value={0.5}></l-spacer>
            <stencil-route-link url="/demo-1">View Demo</stencil-route-link>
          </li>
        </ul>
      </Host>
    );
  }
}
