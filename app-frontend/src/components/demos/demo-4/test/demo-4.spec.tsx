import { newSpecPage } from '@stencil/core/testing';
import { Demo4 } from '../demo-4';

describe('demo-4', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo4],
      html: `<demo-4></demo-4>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-4>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-4>
    `);
  });
});
