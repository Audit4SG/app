import { newE2EPage } from '@stencil/core/testing';

describe('p-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-tooltip></p-tooltip>');

    const element = await page.find('p-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
