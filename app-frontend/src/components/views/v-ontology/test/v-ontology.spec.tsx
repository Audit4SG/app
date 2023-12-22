import { newSpecPage } from '@stencil/core/testing';
import { VOntology } from '../v-ontology';

describe('v-ontology', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VOntology],
      html: `<v-ontology></v-ontology>`,
    });
    expect(page.root).toEqualHtml(`
      <v-ontology>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-ontology>
    `);
  });
});
