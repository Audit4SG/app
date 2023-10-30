import { newE2EPage } from '@stencil/core/testing';

describe('demo-17c', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-17c></demo-17c>');

    const element = await page.find('demo-17c');
    expect(element).toHaveClass('hydrated');
  });
});
