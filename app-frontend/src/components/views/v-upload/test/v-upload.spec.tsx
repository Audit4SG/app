import { newSpecPage } from '@stencil/core/testing';
import { VUpload } from '../v-upload';

describe('v-upload', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VUpload],
      html: `<v-upload></v-upload>`,
    });
    expect(page.root).toEqualHtml(`
      <v-upload>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-upload>
    `);
  });
});
