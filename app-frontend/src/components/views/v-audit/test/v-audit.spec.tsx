import { newSpecPage } from '@stencil/core/testing';
import { VAudit } from '../v-audit';

describe('v-audit', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VAudit],
      html: `<v-audit></v-audit>`,
    });
    expect(page.root).toEqualHtml(`
      <v-audit>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-audit>
    `);
  });
});
