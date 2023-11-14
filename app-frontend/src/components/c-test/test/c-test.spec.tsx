import { newSpecPage } from '@stencil/core/testing';
import { CTest } from '../c-test';

describe('c-test', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CTest],
      html: `<c-test></c-test>`,
    });
    expect(page.root).toEqualHtml(`
      <c-test>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </c-test>
    `);
  });
});
