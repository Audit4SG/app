import { newSpecPage } from '@stencil/core/testing';
import { VInit } from '../v-init';

describe('v-init', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VInit],
      html: `<v-init></v-init>`,
    });
    expect(page.root).toEqualHtml(`
      <v-init>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-init>
    `);
  });
});
