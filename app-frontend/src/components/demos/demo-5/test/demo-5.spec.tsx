import { newSpecPage } from '@stencil/core/testing';
import { Demo5 } from '../demo-5';

describe('demo-5', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo5],
      html: `<demo-5></demo-5>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-5>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-5>
    `);
  });
});
