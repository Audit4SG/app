import { newE2EPage } from '@stencil/core/testing';

describe('demo-19', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-19></demo-19>');

    const element = await page.find('demo-19');
    expect(element).toHaveClass('hydrated');
  });
});
