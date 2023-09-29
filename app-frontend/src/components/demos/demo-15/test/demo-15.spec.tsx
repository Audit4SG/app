import { newSpecPage } from '@stencil/core/testing';
import { Demo15 } from '../demo-15';

describe('demo-15', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo15],
      html: `<demo-15></demo-15>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-15>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-15>
    `);
  });
});
