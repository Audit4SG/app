import { newE2EPage } from '@stencil/core/testing';

describe('demo-14', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-14></demo-14>');

    const element = await page.find('demo-14');
    expect(element).toHaveClass('hydrated');
  });
});
