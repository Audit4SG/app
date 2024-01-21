import { newE2EPage } from '@stencil/core/testing';

describe('p-card-stack-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-card-stack-item></p-card-stack-item>');

    const element = await page.find('p-card-stack-item');
    expect(element).toHaveClass('hydrated');
  });
});
