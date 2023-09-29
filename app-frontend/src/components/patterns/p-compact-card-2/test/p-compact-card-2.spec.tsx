import { newSpecPage } from '@stencil/core/testing';
import { PCompactCard2 } from '../p-compact-card-2';

describe('p-compact-card-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PCompactCard2],
      html: `<p-compact-card-2></p-compact-card-2>`,
    });
    expect(page.root).toEqualHtml(`
      <p-compact-card-2>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-compact-card-2>
    `);
  });
});
