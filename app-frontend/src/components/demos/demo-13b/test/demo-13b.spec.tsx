import { newSpecPage } from '@stencil/core/testing';
import { Demo13b } from '../demo-13b';

describe('demo-13b', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo13b],
      html: `<demo-13b></demo-13b>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-13b>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-13b>
    `);
  });
});
