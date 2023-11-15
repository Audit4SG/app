import { newSpecPage } from '@stencil/core/testing';
import { Demo18b } from '../demo-18b';

describe('demo-18b', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo18b],
      html: `<demo-18b></demo-18b>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-18b>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-18b>
    `);
  });
});
