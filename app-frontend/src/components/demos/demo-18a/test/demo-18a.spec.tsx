import { newSpecPage } from '@stencil/core/testing';
import { Demo18a } from '../demo-18a';

describe('demo-18a', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo18a],
      html: `<demo-18a></demo-18a>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-18a>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-18a>
    `);
  });
});
