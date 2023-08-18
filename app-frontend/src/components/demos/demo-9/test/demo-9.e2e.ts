import { newE2EPage } from '@stencil/core/testing';

describe('demo-9', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-9></demo-9>');

    const element = await page.find('demo-9');
    expect(element).toHaveClass('hydrated');
  });
});
