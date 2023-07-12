import { newSpecPage } from '@stencil/core/testing';
import { Demo3 } from '../demo-3';

describe('demo-3', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo3],
      html: `<demo-3></demo-3>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-3>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-3>
    `);
  });
});
