import { newSpecPage } from '@stencil/core/testing';
import { PCardStackItem } from '../p-card-stack-item';

describe('p-card-stack-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PCardStackItem],
      html: `<p-card-stack-item></p-card-stack-item>`,
    });
    expect(page.root).toEqualHtml(`
      <p-card-stack-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-card-stack-item>
    `);
  });
});
