import { newE2EPage } from '@stencil/core/testing';

describe('demo-13d', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-13d></demo-13d>');

    const element = await page.find('demo-13d');
    expect(element).toHaveClass('hydrated');
  });
});
