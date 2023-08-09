import { newSpecPage } from '@stencil/core/testing';
import { Demo7 } from '../demo-7';

describe('demo-7', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo7],
      html: `<demo-7></demo-7>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-7>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-7>
    `);
  });
});
