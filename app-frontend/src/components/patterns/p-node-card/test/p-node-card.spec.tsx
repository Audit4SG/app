import { newSpecPage } from '@stencil/core/testing';
import { PNodeCard } from '../p-node-card';

describe('p-node-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PNodeCard],
      html: `<p-node-card></p-node-card>`,
    });
    expect(page.root).toEqualHtml(`
      <p-node-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-node-card>
    `);
  });
});
