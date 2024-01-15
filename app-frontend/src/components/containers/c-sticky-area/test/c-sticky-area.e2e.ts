import { newE2EPage } from '@stencil/core/testing';

describe('c-sticky-area', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<c-sticky-area></c-sticky-area>');

    const element = await page.find('c-sticky-area');
    expect(element).toHaveClass('hydrated');
  });
});
