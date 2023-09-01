import { newSpecPage } from '@stencil/core/testing';
import { Demo12 } from '../demo-12';

describe('demo-12', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo12],
      html: `<demo-12></demo-12>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-12>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-12>
    `);
  });
});
