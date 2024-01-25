import { newSpecPage } from '@stencil/core/testing';
import { PCardCompact } from '../p-card-compact';

describe('p-card-compact', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PCardCompact],
      html: `<p-card-compact></p-card-compact>`,
    });
    expect(page.root).toEqualHtml(`
      <p-card-compact>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-card-compact>
    `);
  });
});
