import { newSpecPage } from '@stencil/core/testing';
import { Demo20a } from '../demo-20a';

describe('demo-20a', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Demo20a],
      html: `<demo-20a></demo-20a>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-20a>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-20a>
    `);
  });
});
