import { newE2EPage } from '@stencil/core/testing';

describe('p-compact-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-compact-list></p-compact-list>');

    const element = await page.find('p-compact-list');
    expect(element).toHaveClass('hydrated');
  });
});
