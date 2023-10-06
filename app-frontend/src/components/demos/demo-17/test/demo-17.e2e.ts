import { newE2EPage } from '@stencil/core/testing';

describe('demo-17', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-17></demo-17>');

    const element = await page.find('demo-17');
    expect(element).toHaveClass('hydrated');
  });
});
