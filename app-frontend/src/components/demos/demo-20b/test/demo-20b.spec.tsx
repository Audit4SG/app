import { newSpecPage } from '@stencil/core/testing';
import { Demo20b } from '../demo-20b';

describe('demo-20b', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo20b],
      html: `<demo-20b></demo-20b>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-20b>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-20b>
    `);
  });
});
