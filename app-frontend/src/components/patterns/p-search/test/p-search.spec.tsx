import { newSpecPage } from '@stencil/core/testing';
import { PSearch } from '../p-search';

describe('p-search', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PSearch],
      html: `<p-search></p-search>`,
    });
    expect(page.root).toEqualHtml(`
      <p-search>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-search>
    `);
  });
});
