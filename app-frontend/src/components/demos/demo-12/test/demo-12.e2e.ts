import { newE2EPage } from '@stencil/core/testing';

describe('demo-12', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-12></demo-12>');

    const element = await page.find('demo-12');
    expect(element).toHaveClass('hydrated');
  });
});
