import { newSpecPage } from '@stencil/core/testing';
import { PTooltip } from '../p-tooltip';

describe('p-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PTooltip],
      html: `<p-tooltip></p-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <p-tooltip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-tooltip>
    `);
  });
});
