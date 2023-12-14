import { newE2EPage } from '@stencil/core/testing';

describe('demo-20-reading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-20-reading></demo-20-reading>');

    const element = await page.find('demo-20-reading');
    expect(element).toHaveClass('hydrated');
  });
});
