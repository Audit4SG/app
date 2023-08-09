import { newE2EPage } from '@stencil/core/testing';

describe('demo-7', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-7></demo-7>');

    const element = await page.find('demo-7');
    expect(element).toHaveClass('hydrated');
  });
});
