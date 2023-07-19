import { newE2EPage } from '@stencil/core/testing';

describe('demo-4', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-4></demo-4>');

    const element = await page.find('demo-4');
    expect(element).toHaveClass('hydrated');
  });
});
