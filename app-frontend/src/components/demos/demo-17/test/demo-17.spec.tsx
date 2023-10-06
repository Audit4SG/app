import { newSpecPage } from '@stencil/core/testing';
import { Demo17 } from '../demo-17';

describe('demo-17', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo17],
      html: `<demo-17></demo-17>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-17>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-17>
    `);
  });
});
