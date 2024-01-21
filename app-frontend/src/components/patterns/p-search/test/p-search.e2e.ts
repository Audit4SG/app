import { newE2EPage } from '@stencil/core/testing';

describe('p-search', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-search></p-search>');

    const element = await page.find('p-search');
    expect(element).toHaveClass('hydrated');
  });
});
