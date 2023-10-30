import { newSpecPage } from '@stencil/core/testing';
import { Demo17c } from '../demo-17c';

describe('demo-17c', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo17c],
      html: `<demo-17c></demo-17c>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-17c>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-17c>
    `);
  });
});
