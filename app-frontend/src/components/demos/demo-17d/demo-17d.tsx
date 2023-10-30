import { Component, State, Host, h } from '@stencil/core';
import { Client } from 'typesense';

@Component({
  tag: 'demo-17d',
  styleUrl: 'demo-17d.css',
  shadow: true,
})
export class Demo17d {
  inputBoxEl!: HTMLInputElement;

  componentWillLoad() {
    this.initTypesenseClient();
  }

  private searchString: string = '';
  private inputTimeout: any;
  private typesenseClient: any;

  @State() results: any = [];

  initTypesenseClient() {
    this.typesenseClient = new Client({
      nodes: [
        {
          host: 'localhost',
          port: 8108,
          protocol: 'http',
        },
      ],
      apiKey: 'Y58xEcn6fuPXAbtYl7p9Nb7NeEXupfiI',
      connectionTimeoutSeconds: 5,
    });
  }

  handleInput(e) {
    clearTimeout(this.inputTimeout);
    this.searchString = e.target.value.trim();
    if (!this.searchString) {
      this.clearSearchResults();
      return;
    }
    this.inputTimeout = setTimeout(() => {
      this.handleSearch();
    }, 500);
  }

  handleSearch() {
    let searchParams = {
      q: this.searchString,
      query_by: 'type,value,definition,question,reference,embedding',
      prefix: false,
    };

    this.clearSearchResults();
    this.typesenseClient
      .collections('relaio-openai')
      .documents()
      .search(searchParams)
      .then(results => {
        let resultsRaw = results.hits;
        resultsRaw.map((result: any) => {
          let obj = {
            type: result.document.type,
            value: result.document.value,
          };
          this.results.push(obj);
        });
        this.results = [...this.results];
        console.log(this.results);
      });
  }

  clearSearchResults() {
    this.results = [];
    this.results = [...this.results];
  }

  render() {
    return (
      <Host>
        <h1>Typesense Search (OpenAI API)</h1>
        <input onInput={e => this.handleInput(e)} ref={el => (this.inputBoxEl = el as HTMLInputElement)} placeholder="🔍 Search something.."></input>
        <main>
          {this.results.length > 0 ? (
            <ul>
              {this.results.map((result: any) => (
                <li>
                  {result.value} ({result.type})
                </li>
              ))}
            </ul>
          ) : (
            ''
          )}
        </main>
      </Host>
    );
  }
}
