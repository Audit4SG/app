import { Component, Host, h } from '@stencil/core';
import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import { searchBox, hits } from 'instantsearch.js/es/widgets';

const searchClient = algoliasearch('C1EEPNVGGI', 'a2be4159a45f4950d87e4b266cf6337a');

@Component({
  tag: 'demo-16',
  styleUrl: 'demo-16.css',
  shadow: true,
})
export class Demo16 {
  searchBoxEl!: HTMLDivElement;
  hitsEl!: HTMLDivElement;

  private search = instantsearch({
    indexName: 'audit4sg_demo_search',
    searchClient,
  });

  componentDidLoad() {
    this.initAlgolia();
  }

  initAlgolia() {
    this.search.addWidgets([
      searchBox({
        container: this.searchBoxEl,
      }),
      hits({
        container: this.hitsEl,
      }),
    ]);
    this.search.start();
  }

  render() {
    return (
      <Host>
        <div class="search__container">
          <span>Algolia</span>
          <div class="algolia__ui-element" ref={el => (this.searchBoxEl = el as HTMLDivElement)}></div>
          <div class="algolia__ui-element" ref={el => (this.hitsEl = el as HTMLDivElement)}></div>
        </div>
      </Host>
    );
  }
}
