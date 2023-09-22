import { newSpecPage } from '@stencil/core/testing';
import { Demo13c } from '../demo-13c';

describe('demo-13c', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo13c],
      html: `<demo-13c></demo-13c>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-13c>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-13c>
    `);
  });
});
