import { newE2EPage } from '@stencil/core/testing';

describe('demo-11', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-11></demo-11>');

    const element = await page.find('demo-11');
    expect(element).toHaveClass('hydrated');
  });
});
