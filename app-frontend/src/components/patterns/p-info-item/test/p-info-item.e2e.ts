import { newE2EPage } from '@stencil/core/testing';

describe('p-info-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-info-item></p-info-item>');

    const element = await page.find('p-info-item');
    expect(element).toHaveClass('hydrated');
  });
});
