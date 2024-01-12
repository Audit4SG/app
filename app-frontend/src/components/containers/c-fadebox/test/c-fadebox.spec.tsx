import { newSpecPage } from '@stencil/core/testing';
import { CFadebox } from '../c-fadebox';

describe('c-fadebox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CFadebox],
      html: `<c-fadebox></c-fadebox>`,
    });
    expect(page.root).toEqualHtml(`
      <c-fadebox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </c-fadebox>
    `);
  });
});
