import { newSpecPage } from '@stencil/core/testing';
import { CollapsibleTree } from '../collapsible-tree';

describe('collapsible-tree', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CollapsibleTree],
      html: `<collapsible-tree></collapsible-tree>`,
    });
    expect(page.root).toEqualHtml(`
      <collapsible-tree>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </collapsible-tree>
    `);
  });
});
