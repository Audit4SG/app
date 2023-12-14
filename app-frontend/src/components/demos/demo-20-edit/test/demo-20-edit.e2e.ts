import { newE2EPage } from '@stencil/core/testing';

describe('demo-20-edit', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-20-edit></demo-20-edit>');

    const element = await page.find('demo-20-edit');
    expect(element).toHaveClass('hydrated');
  });
});
