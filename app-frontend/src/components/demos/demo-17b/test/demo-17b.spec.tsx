import { newSpecPage } from '@stencil/core/testing';
import { Demo17b } from '../demo-17b';

describe('demo-17b', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo17b],
      html: `<demo-17b></demo-17b>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-17b>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-17b>
    `);
  });
});
