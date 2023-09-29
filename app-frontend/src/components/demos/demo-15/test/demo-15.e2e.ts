import { newE2EPage } from '@stencil/core/testing';

describe('demo-15', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-15></demo-15>');

    const element = await page.find('demo-15');
    expect(element).toHaveClass('hydrated');
  });
});
