import { newE2EPage } from '@stencil/core/testing';

describe('v-audit', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-audit></v-audit>');

    const element = await page.find('v-audit');
    expect(element).toHaveClass('hydrated');
  });
});
