import { newE2EPage } from '@stencil/core/testing';

describe('demo-8', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-8></demo-8>');

    const element = await page.find('demo-8');
    expect(element).toHaveClass('hydrated');
  });
});
