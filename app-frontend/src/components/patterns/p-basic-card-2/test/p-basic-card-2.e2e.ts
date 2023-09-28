import { newE2EPage } from '@stencil/core/testing';

describe('p-basic-card-2', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-basic-card-2></p-basic-card-2>');

    const element = await page.find('p-basic-card-2');
    expect(element).toHaveClass('hydrated');
  });
});
