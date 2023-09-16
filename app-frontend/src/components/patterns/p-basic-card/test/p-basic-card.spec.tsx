import { newSpecPage } from '@stencil/core/testing';
import { PBasicCard } from '../p-basic-card';

describe('p-basic-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PBasicCard],
      html: `<p-basic-card></p-basic-card>`,
    });
    expect(page.root).toEqualHtml(`
      <p-basic-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-basic-card>
    `);
  });
});
