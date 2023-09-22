import { newE2EPage } from '@stencil/core/testing';

describe('demo-13c', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-13c></demo-13c>');

    const element = await page.find('demo-13c');
    expect(element).toHaveClass('hydrated');
  });
});
