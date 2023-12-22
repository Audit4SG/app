import { newSpecPage } from '@stencil/core/testing';
import { VReading } from '../v-reading';

describe('v-reading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VReading],
      html: `<v-reading></v-reading>`,
    });
    expect(page.root).toEqualHtml(`
      <v-reading>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-reading>
    `);
  });
});
