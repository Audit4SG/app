import { newSpecPage } from '@stencil/core/testing';
import { PCompactCard } from '../p-compact-card';

describe('p-compact-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PCompactCard],
      html: `<p-compact-card></p-compact-card>`,
    });
    expect(page.root).toEqualHtml(`
      <p-compact-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-compact-card>
    `);
  });
});
