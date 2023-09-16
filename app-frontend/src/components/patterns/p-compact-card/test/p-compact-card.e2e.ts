import { newE2EPage } from '@stencil/core/testing';

describe('p-compact-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-compact-card></p-compact-card>');

    const element = await page.find('p-compact-card');
    expect(element).toHaveClass('hydrated');
  });
});
