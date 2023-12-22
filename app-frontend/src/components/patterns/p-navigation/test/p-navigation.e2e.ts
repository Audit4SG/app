import { newE2EPage } from '@stencil/core/testing';

describe('p-navigation', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-navigation></p-navigation>');

    const element = await page.find('p-navigation');
    expect(element).toHaveClass('hydrated');
  });
});
