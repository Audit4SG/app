import { newE2EPage } from '@stencil/core/testing';

describe('v-init', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-init></v-init>');

    const element = await page.find('v-init');
    expect(element).toHaveClass('hydrated');
  });
});
