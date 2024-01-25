import { newE2EPage } from '@stencil/core/testing';

describe('p-card-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-card-modal></p-card-modal>');

    const element = await page.find('p-card-modal');
    expect(element).toHaveClass('hydrated');
  });
});
