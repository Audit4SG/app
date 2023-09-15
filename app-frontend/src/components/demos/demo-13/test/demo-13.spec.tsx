import { newSpecPage } from '@stencil/core/testing';
import { Demo13 } from '../demo-13';

describe('demo-13', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo13],
      html: `<demo-13></demo-13>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-13>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-13>
    `);
  });
});
