import { newE2EPage } from '@stencil/core/testing';

describe('demo-18a', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-18a></demo-18a>');

    const element = await page.find('demo-18a');
    expect(element).toHaveClass('hydrated');
  });
});
