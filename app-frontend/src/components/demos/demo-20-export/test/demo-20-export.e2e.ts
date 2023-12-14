import { newE2EPage } from '@stencil/core/testing';

describe('demo-20-export', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-20-export></demo-20-export>');

    const element = await page.find('demo-20-export');
    expect(element).toHaveClass('hydrated');
  });
});
