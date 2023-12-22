import { newSpecPage } from '@stencil/core/testing';
import { PNavigation } from '../p-navigation';

describe('p-navigation', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PNavigation],
      html: `<p-navigation></p-navigation>`,
    });
    expect(page.root).toEqualHtml(`
      <p-navigation>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-navigation>
    `);
  });
});
