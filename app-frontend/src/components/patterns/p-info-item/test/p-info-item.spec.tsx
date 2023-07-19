import { newSpecPage } from '@stencil/core/testing';
import { PInfoItem } from '../p-info-item';

describe('p-info-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PInfoItem],
      html: `<p-info-item></p-info-item>`,
    });
    expect(page.root).toEqualHtml(`
      <p-info-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-info-item>
    `);
  });
});
