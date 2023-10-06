import { newSpecPage } from '@stencil/core/testing';
import { Demo16 } from '../demo-16';

describe('demo-16', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo16],
      html: `<demo-16></demo-16>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-16>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-16>
    `);
  });
});
