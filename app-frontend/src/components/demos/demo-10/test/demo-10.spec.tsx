import { newSpecPage } from '@stencil/core/testing';
import { Demo10 } from '../demo-10';

describe('demo-10', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo10],
      html: `<demo-10></demo-10>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-10>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-10>
    `);
  });
});
