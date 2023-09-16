import { newE2EPage } from '@stencil/core/testing';

describe('p-basic-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-basic-card></p-basic-card>');

    const element = await page.find('p-basic-card');
    expect(element).toHaveClass('hydrated');
  });
});
