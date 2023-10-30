import { newSpecPage } from '@stencil/core/testing';
import { Demo17d } from '../demo-17d';

describe('demo-17d', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo17d],
      html: `<demo-17d></demo-17d>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-17d>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-17d>
    `);
  });
});
