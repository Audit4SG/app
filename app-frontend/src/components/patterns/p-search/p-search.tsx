import { Component, State, FunctionalComponent, Host, h } from '@stencil/core';
import { Client } from 'typesense';
import { gsap } from 'gsap';

@Component({
  tag: 'p-search',
  styleUrl: 'p-search.css',
  shadow: true,
})
export class PSearch {
  searchBox!: HTMLInputElement;

  private tl: any = gsap.timeline();
  private searchString: string = '';
  private typesenseClient: any;
  private inputTimeout: any;

  @State() results: any = [];
  @State() isSearchInitiated: boolean = false;
  @State() isSearchResulsAvailable: boolean = false;

  componentWillLoad() {
    this.initTypesenseClient();
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
    if (!this.searchString) {
      this.isSearchInitiated = false;
      this.clearSearchResults();
      return;
    }

    if (!this.isSearchInitiated) {
      this.isSearchInitiated = true;
    }

    this.inputTimeout = setTimeout(() => {
      this.clearSearchResults();
      this.handleSearch();
    }, 750);
  }

  handleSearchFocus() {
    this.tl.to(this.searchBox, { width: '400px', duration: 0.25 });
  }

  handleSearchBlur() {
    this.tl.to(this.searchBox, { width: 'auto', duration: 0.25 });
  }

  clearSearchResults() {
    this.results = [];
    this.results = [...this.results];
    this.isSearchResulsAvailable = false;
  }

  handleSearch() {
    let searchParams = {
      q: this.searchString,
      query_by: 'label,type,description,provocation,references,embedding',
      prefix: false,
    };
    this.typesenseClient
      .collections('relaio-openai-v2')
      .documents()
      .search(searchParams)
      .then(results => {
        let resultsRaw = results.hits;
        resultsRaw.map((result: any) => {
          let obj: any = {
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
        this.results = [...this.results];
        console.log(this.results);
        this.isSearchResulsAvailable = true;
      });
  }

  findRelationSourceTarget(label: string) {
    let source: string;
    let target: string;
    // this.links.map((link: any) => {
    //   if (link.label === label) {
    //     source = link.source.label;
    //     target = link.target.label;
    //   }
    // });

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
    this.handleSearchBlur();
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
              &nbsp;
              <span>
                <strong>{result.label}</strong>
              </span>
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
              <div class="search-relation-container">
                <div>
                  <div></div>
                  <span>{result.source}</span>
                </div>
                &nbsp; &nbsp;
                <div class="relation-symbol-container">
                  <div class="relation-line"></div>
                  <span class="relation-name-container">{result.label}</span>
                  <div class="relation-line"></div>
                </div>
                &nbsp; &nbsp;
                <div>
                  <div></div>
                  <span>{result.target}</span>
                </div>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  render() {
    return (
      <Host>
        <input
          type="text"
          onInput={e => this.handleSearchInput(e)}
          onFocus={() => this.handleSearchFocus()}
          onBlur={() => this.handleSearchBlur()}
          placeholder="🔍 Search.."
          ref={el => (this.searchBox = el as HTMLInputElement)}
        ></input>
        {this.isSearchInitiated && <div>{this.isSearchResulsAvailable ? <this.SearchResults></this.SearchResults> : <this.SearchLoader></this.SearchLoader>} </div>}
      </Host>
    );
  }
}
