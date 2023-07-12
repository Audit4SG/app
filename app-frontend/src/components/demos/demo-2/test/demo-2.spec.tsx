import { newSpecPage } from '@stencil/core/testing';
import { Demo2 } from '../demo-2';

describe('demo-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo2],
      html: `<demo-2></demo-2>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-2>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-2>
    `);
  });
});
