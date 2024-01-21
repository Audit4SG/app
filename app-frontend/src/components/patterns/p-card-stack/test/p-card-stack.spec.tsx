import { newSpecPage } from '@stencil/core/testing';
import { PCardStack } from '../p-card-stack';

describe('p-card-stack', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PCardStack],
      html: `<p-card-stack></p-card-stack>`,
    });
    expect(page.root).toEqualHtml(`
      <p-card-stack>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-card-stack>
    `);
  });
});
