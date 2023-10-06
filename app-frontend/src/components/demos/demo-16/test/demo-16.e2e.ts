import { newE2EPage } from '@stencil/core/testing';

describe('demo-16', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-16></demo-16>');

    const element = await page.find('demo-16');
    expect(element).toHaveClass('hydrated');
  });
});
