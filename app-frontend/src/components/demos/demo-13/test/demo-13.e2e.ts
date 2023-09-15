import { newE2EPage } from '@stencil/core/testing';

describe('demo-13', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-13></demo-13>');

    const element = await page.find('demo-13');
    expect(element).toHaveClass('hydrated');
  });
});
