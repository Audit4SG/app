import { newSpecPage } from '@stencil/core/testing';
import { PCompactList } from '../p-compact-list';

describe('p-compact-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PCompactList],
      html: `<p-compact-list></p-compact-list>`,
    });
    expect(page.root).toEqualHtml(`
      <p-compact-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-compact-list>
    `);
  });
});
