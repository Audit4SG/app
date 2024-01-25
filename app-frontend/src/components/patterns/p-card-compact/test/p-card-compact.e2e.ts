import { newE2EPage } from '@stencil/core/testing';

describe('p-card-compact', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-card-compact></p-card-compact>');

    const element = await page.find('p-card-compact');
    expect(element).toHaveClass('hydrated');
  });
});
