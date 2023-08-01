import { newSpecPage } from '@stencil/core/testing';
import { PNodeItem } from '../p-node-item';

describe('p-node-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PNodeItem],
      html: `<p-node-item></p-node-item>`,
    });
    expect(page.root).toEqualHtml(`
      <p-node-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-node-item>
    `);
  });
});
