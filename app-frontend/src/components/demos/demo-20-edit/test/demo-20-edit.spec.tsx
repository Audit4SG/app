import { newSpecPage } from '@stencil/core/testing';
import { Demo20Edit } from '../demo-20-edit';

describe('demo-20-edit', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo20Edit],
      html: `<demo-20-edit></demo-20-edit>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-20-edit>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-20-edit>
    `);
  });
});
