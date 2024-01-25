import { newE2EPage } from '@stencil/core/testing';

describe('v-summary', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-summary></v-summary>');

    const element = await page.find('v-summary');
    expect(element).toHaveClass('hydrated');
  });
});
