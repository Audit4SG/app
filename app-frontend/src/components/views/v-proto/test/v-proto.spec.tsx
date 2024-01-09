import { newSpecPage } from '@stencil/core/testing';
import { VProto } from '../v-proto';

describe('v-proto', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VProto],
      html: `<v-proto></v-proto>`,
    });
    expect(page.root).toEqualHtml(`
      <v-proto>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-proto>
    `);
  });
});
