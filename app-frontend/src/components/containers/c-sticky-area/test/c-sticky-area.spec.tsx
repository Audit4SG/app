import { newSpecPage } from '@stencil/core/testing';
import { CStickyArea } from '../c-sticky-area';

describe('c-sticky-area', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CStickyArea],
      html: `<c-sticky-area></c-sticky-area>`,
    });
    expect(page.root).toEqualHtml(`
      <c-sticky-area>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </c-sticky-area>
    `);
  });
});
