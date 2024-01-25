import { newSpecPage } from '@stencil/core/testing';
import { PCardModal } from '../p-card-modal';

describe('p-card-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PCardModal],
      html: `<p-card-modal></p-card-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <p-card-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-card-modal>
    `);
  });
});
