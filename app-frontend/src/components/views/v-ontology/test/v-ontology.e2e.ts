import { newE2EPage } from '@stencil/core/testing';

describe('v-ontology', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-ontology></v-ontology>');

    const element = await page.find('v-ontology');
    expect(element).toHaveClass('hydrated');
  });
});
