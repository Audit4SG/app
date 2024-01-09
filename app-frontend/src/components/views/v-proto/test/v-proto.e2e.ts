import { newE2EPage } from '@stencil/core/testing';

describe('v-proto', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-proto></v-proto>');

    const element = await page.find('v-proto');
    expect(element).toHaveClass('hydrated');
  });
});
