import { newE2EPage } from '@stencil/core/testing';

describe('demo-2', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-2></demo-2>');

    const element = await page.find('demo-2');
    expect(element).toHaveClass('hydrated');
  });
});
