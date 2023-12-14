import { newSpecPage } from '@stencil/core/testing';
import { Demo20Reading } from '../demo-20-reading';

describe('demo-20-reading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo20Reading],
      html: `<demo-20-reading></demo-20-reading>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-20-reading>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-20-reading>
    `);
  });
});
