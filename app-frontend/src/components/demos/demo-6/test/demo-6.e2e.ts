import { newE2EPage } from '@stencil/core/testing';

describe('demo-6', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-6></demo-6>');

    const element = await page.find('demo-6');
    expect(element).toHaveClass('hydrated');
  });
});
