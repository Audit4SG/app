import { newSpecPage } from '@stencil/core/testing';
import { Demo11 } from '../demo-11';

describe('demo-11', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo11],
      html: `<demo-11></demo-11>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-11>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-11>
    `);
  });
});
