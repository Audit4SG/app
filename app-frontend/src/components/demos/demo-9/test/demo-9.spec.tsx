import { newSpecPage } from '@stencil/core/testing';
import { Demo9 } from '../demo-9';

describe('demo-9', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo9],
      html: `<demo-9></demo-9>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-9>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-9>
    `);
  });
});
