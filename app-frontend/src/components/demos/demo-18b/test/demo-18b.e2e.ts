import { newE2EPage } from '@stencil/core/testing';

describe('demo-18b', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-18b></demo-18b>');

    const element = await page.find('demo-18b');
    expect(element).toHaveClass('hydrated');
  });
});
