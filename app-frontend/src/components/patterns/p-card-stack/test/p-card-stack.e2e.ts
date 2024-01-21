import { newE2EPage } from '@stencil/core/testing';

describe('p-card-stack', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-card-stack></p-card-stack>');

    const element = await page.find('p-card-stack');
    expect(element).toHaveClass('hydrated');
  });
});
