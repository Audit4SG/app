import { newE2EPage } from '@stencil/core/testing';

describe('v-upload', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-upload></v-upload>');

    const element = await page.find('v-upload');
    expect(element).toHaveClass('hydrated');
  });
});
