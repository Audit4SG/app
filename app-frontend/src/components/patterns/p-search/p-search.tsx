import { Component, Event, EventEmitter, Prop, State, FunctionalComponent, h, Watch } from '@stencil/core';
import { Client } from 'typesense';
import { gsap } from 'gsap';
import { state } from '../../../global/script';
import { generateTitleCase } from '../../app-root/helpers';

interface LooseObject {
  [key: string]: any;
}

@Component({
  tag: 'p-search',
  styleUrl: 'p-search.css',
  shadow: true,
})
export class PSearch {
  searchContainer!: HTMLDivElement;
  searchBox!: HTMLInputElement;

  private tl: any = gsap.timeline();
  private searchString: string = '';
  private typesenseClient: any;
  private inputTimeout: any;
  private links: any;

  @Event({
    eventName: 'searchExpansion',
    bubbles: true,
  })
  searchExpansionEvent: EventEmitter;

  @Event({
    eventName: 'searchContraction',
    bubbles: true,
  })
  searchContractionEvent: EventEmitter;

  @Prop() expand: boolean = false;

  @State() results: any = [];
  @State() isSearchboxExpanded: boolean = false;
  @State() isSearchResultsAvailable: boolean = true;

  @Watch('expand') watchMinimise(newVal: boolean, oldVal: boolean) {
    if (newVal != oldVal) {
      if (!newVal) {
        this.collapseSearch();
      } else {
        this.expandSearch();
      }
    }
  }

  componentWillLoad() {
    this.initTypesenseClient();
    this.links = JSON.parse(state.nodeRelations);
  }

  initTypesenseClient() {
    let host: string = document.domain === 'localhost' ? 'localhost' : 'typesense-api.audit4sg.org';
    let protocol: string = document.domain === 'localhost' ? 'http' : 'https';
    let port: number = document.domain === 'localhost' ? 8108 : 443;
    this.typesenseClient = new Client({
      nodes: [
        {
          host: host,
          port: port,
          protocol: protocol,
        },
      ],
      apiKey: 'Y58xEcn6fuPXAbtYl7p9Nb7NeEXupfiI',
      connectionTimeoutSeconds: 10,
    });
  }

  handleSearchInput(e) {
    clearTimeout(this.inputTimeout);
    this.searchString = e.target.value.trim();
    this.clearSearchResults();

    if (!this.searchString) {
      this.isSearchResultsAvailable = true;
    } else {
      this.inputTimeout = setTimeout(() => {
        this.handleSearch();
      }, 750);
    }
  }

  expandSearch() {
    this.tl.to(this.searchContainer, { width: '600px', duration: 0.25 });
    this.isSearchboxExpanded = true;
    this.searchExpansionEvent.emit();
  }

  collapseSearch() {
    this.isSearchboxExpanded = false;
    this.tl.to(this.searchContainer, { width: '175px', duration: 0.25 });
    this.searchContractionEvent.emit();
  }

  clearSearchResults() {
    this.results = [];
    this.results = [...this.results];
  }

  handleSearch() {
    this.isSearchResultsAvailable = false;
    let searchParams = {
      q: this.searchString,
      query_by: 'label,type,description,provocation,references,embedding',
      prefix: false,
    };
    this.typesenseClient
      .collections('relaio-openai-27feb2024')
      .documents()
      .search(searchParams)
      .then(results => {
        let resultsRaw = results.hits;
        if (resultsRaw) {
          resultsRaw.map((result: any) => {
            let obj: LooseObject = {
              type: result.document.type,
              label: result.document.label,
              description: result.document.description,
              provocation: result.document.provocation,
              references: result.document.references,
            };
            if (result.document.type === 'Relation') {
              let { source, target } = this.findRelationSourceTarget(result.document.label);
              obj.source = source;
              obj.target = target;
            }
            this.results.push(obj);
          });
        } else {
          this.results = [];
        }
        this.results = [...this.results];
        this.isSearchResultsAvailable = true;
      });
  }

  findRelationSourceTarget(label: string) {
    let source: string;
    let target: string;
    this.links.map((link: any) => {
      if (link.label === label) {
        source = generateTitleCase(link.source.split('#')[1]);
        target = generateTitleCase(link.target.split('#')[1]);
      }
    });
    return {
      source: source,
      target: target,
    };
  }

  handleSearchClick(label: string) {
    // let type: string = '';
    // let source: string = '';
    // this.results.map(item => {
    //   if (label === item.label) {
    //     type = item.type;
    //     source = item.source;
    //   }
    // });
    // if (type === 'Class') {
    //   let nodeId: string = '';
    //   this.nodes.map((node: any) => {
    //     if (node.label === label) {
    //       nodeId = node.id;
    //     }
    //   });
    //   this.flyTo(label);
    //   this.pushIntoCardStack(nodeId);
    // } else if (type === 'Relation') {
    //   let sourceId: string = '';
    //   this.nodes.map((node: any) => {
    //     if (node.label === source) {
    //       sourceId = node.id;
    //     }
    //   });
    //   this.flyTo(source);
    //   this.highlightEdge(sourceId);
    // }
    this.clearSearchResults();
    this.searchString = '';
    this.searchBox.value = '';
    this.collapseSearch();
  }

  SearchLoader: FunctionalComponent = () => (
    <div class="search-loader__container">
      <div class="shine-line"></div>
      <l-spacer value={1}></l-spacer>
      <div class="shine-line"></div>
      <l-spacer value={1}></l-spacer>
      <div class="shine-line shine-line--half"></div>
      <l-spacer value={1.5}></l-spacer>
      <l-seperator></l-seperator>
      <l-spacer value={1.5}></l-spacer>
      <div class="shine-line"></div>
      <l-spacer value={1}></l-spacer>
      <div class="shine-line"></div>
      <l-spacer value={1}></l-spacer>
      <div class="shine-line shine-line--half"></div>
      <l-spacer value={1.5}></l-spacer>
      <l-seperator></l-seperator>
      <l-spacer value={1.5}></l-spacer>
      <div class="shine-line"></div>
      <l-spacer value={1}></l-spacer>
      <div class="shine-line"></div>
      <l-spacer value={1}></l-spacer>
      <div class="shine-line shine-line--half"></div>
    </div>
  );

  SearchResults: FunctionalComponent = () => (
    <ul id="search-results-list">
      {this.results.map((result: any) => (
        <li class="search-result-item" onClick={() => this.handleSearchClick(result.label)}>
          {result.type === 'Class' && (
            <div>
              <span class="bubble green-bubble">{result.type}</span>
              &nbsp;&nbsp;
              <span>
                <strong>{result.label}</strong>
              </span>
              <br />
              <br />
              <span>{result.description}</span>
              {result.provocation && (
                <div>
                  <br />
                  <div class="double-bubble-container">
                    <span class="bubble bubble-first grey-bubble">{result.label}</span>
                    <span class="bubble bubble-second green-bubble">Provocation</span>
                  </div>
                  <span>{result.provocation}</span>
                </div>
              )}
              {result.provocation && (
                <div>
                  <br />
                  <div class="double-bubble-container">
                    <span class="bubble bubble-first grey-bubble">{result.label}</span>
                    <span class="bubble bubble-second green-bubble">References</span>
                  </div>
                  <span>{result.references}</span>
                </div>
              )}
            </div>
          )}
          {result.type === 'Relation' && (
            <div>
              <span class="bubble green-bubble">Relation</span>
              <br />
              <br />
              <l-row justify="space-between">
                <div class="relation-item">
                  <e-text>{result.source}</e-text>
                </div>
                <div class="relation-symbol-container">
                  <div class="relation-line"></div>
                  <span class="relation-name-container">{result.label}</span>
                  <div class="relation-line"></div>
                </div>
                <div class="relation-item">
                  <e-text>{result.target}</e-text>
                </div>
              </l-row>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  render() {
    return (
      <div id="search-container" ref={el => (this.searchContainer = el as HTMLInputElement)}>
        <input
          type="text"
          onInput={e => this.handleSearchInput(e)}
          onFocus={() => this.expandSearch()}
          placeholder="🔍 Search.."
          ref={el => (this.searchBox = el as HTMLInputElement)}
        ></input>
        {this.isSearchboxExpanded &&
          (this.isSearchResultsAvailable ? this.results.length > 0 && <this.SearchResults></this.SearchResults> : <this.SearchLoader></this.SearchLoader>)}
      </div>
    );
  }
}
