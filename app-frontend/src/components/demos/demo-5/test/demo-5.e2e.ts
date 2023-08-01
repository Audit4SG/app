import { newE2EPage } from '@stencil/core/testing';

describe('demo-5', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-5></demo-5>');

    const element = await page.find('demo-5');
    expect(element).toHaveClass('hydrated');
  });
});
