import { newE2EPage } from '@stencil/core/testing';

describe('demo-3', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-3></demo-3>');

    const element = await page.find('demo-3');
    expect(element).toHaveClass('hydrated');
  });
});
