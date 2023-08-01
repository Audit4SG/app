import { newE2EPage } from '@stencil/core/testing';

describe('p-node-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-node-item></p-node-item>');

    const element = await page.find('p-node-item');
    expect(element).toHaveClass('hydrated');
  });
});
