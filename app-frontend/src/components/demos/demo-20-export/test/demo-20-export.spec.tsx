import { newSpecPage } from '@stencil/core/testing';
import { Demo20Export } from '../demo-20-export';

describe('demo-20-export', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo20Export],
      html: `<demo-20-export></demo-20-export>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-20-export>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-20-export>
    `);
  });
});
