import { newSpecPage } from '@stencil/core/testing';
import { Demo6 } from '../demo-6';

describe('demo-6', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo6],
      html: `<demo-6></demo-6>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-6>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-6>
    `);
  });
});
