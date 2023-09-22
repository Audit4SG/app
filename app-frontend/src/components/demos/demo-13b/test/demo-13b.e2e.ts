import { newE2EPage } from '@stencil/core/testing';

describe('demo-13b', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-13b></demo-13b>');

    const element = await page.find('demo-13b');
    expect(element).toHaveClass('hydrated');
  });
});
