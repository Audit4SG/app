import { newSpecPage } from '@stencil/core/testing';
import { Demo19 } from '../demo-19';

describe('demo-19', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo19],
      html: `<demo-19></demo-19>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-19>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-19>
    `);
  });
});
