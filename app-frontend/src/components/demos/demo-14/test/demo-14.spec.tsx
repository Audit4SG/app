import { newSpecPage } from '@stencil/core/testing';
import { Demo14 } from '../demo-14';

describe('demo-14', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo14],
      html: `<demo-14></demo-14>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-14>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-14>
    `);
  });
});
