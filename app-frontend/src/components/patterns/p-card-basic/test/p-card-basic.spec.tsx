import { newSpecPage } from '@stencil/core/testing';
import { PCardBasic } from '../p-card-basic';

describe('p-card-basic', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PCardBasic],
      html: `<p-card-basic></p-card-basic>`,
    });
    expect(page.root).toEqualHtml(`
      <p-card-basic>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-card-basic>
    `);
  });
});
