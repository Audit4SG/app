import { newE2EPage } from '@stencil/core/testing';

describe('p-node-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-node-card></p-node-card>');

    const element = await page.find('p-node-card');
    expect(element).toHaveClass('hydrated');
  });
});
