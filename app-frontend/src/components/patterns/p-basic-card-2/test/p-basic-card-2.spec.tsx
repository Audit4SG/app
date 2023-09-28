import { newSpecPage } from '@stencil/core/testing';
import { PBasicCard2 } from '../p-basic-card-2';

describe('p-basic-card-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PBasicCard2],
      html: `<p-basic-card-2></p-basic-card-2>`,
    });
    expect(page.root).toEqualHtml(`
      <p-basic-card-2>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-basic-card-2>
    `);
  });
});
