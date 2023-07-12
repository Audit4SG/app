import { newSpecPage } from '@stencil/core/testing';
import { Demo1 } from '../demo-1';

describe('demo-1', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo1],
      html: `<demo-1></demo-1>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-1>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-1>
    `);
  });
});
