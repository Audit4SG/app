import { newE2EPage } from '@stencil/core/testing';

describe('demo-1', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-1></demo-1>');

    const element = await page.find('demo-1');
    expect(element).toHaveClass('hydrated');
  });
});
