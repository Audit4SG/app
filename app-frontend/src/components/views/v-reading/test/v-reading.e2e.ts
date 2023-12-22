import { newE2EPage } from '@stencil/core/testing';

describe('v-reading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-reading></v-reading>');

    const element = await page.find('v-reading');
    expect(element).toHaveClass('hydrated');
  });
});
