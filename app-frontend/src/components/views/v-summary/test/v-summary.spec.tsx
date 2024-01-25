import { newSpecPage } from '@stencil/core/testing';
import { VSummary } from '../v-summary';

describe('v-summary', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VSummary],
      html: `<v-summary></v-summary>`,
    });
    expect(page.root).toEqualHtml(`
      <v-summary>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-summary>
    `);
  });
});
