import { newSpecPage } from '@stencil/core/testing';
import { Demo8 } from '../demo-8';

describe('demo-8', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo8],
      html: `<demo-8></demo-8>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-8>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-8>
    `);
  });
});
