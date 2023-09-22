import { newSpecPage } from '@stencil/core/testing';
import { Demo13d } from '../demo-13d';

describe('demo-13d', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo13d],
      html: `<demo-13d></demo-13d>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-13d>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-13d>
    `);
  });
});
