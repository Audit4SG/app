import { newE2EPage } from '@stencil/core/testing';

describe('demo-10', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-10></demo-10>');

    const element = await page.find('demo-10');
    expect(element).toHaveClass('hydrated');
  });
});
