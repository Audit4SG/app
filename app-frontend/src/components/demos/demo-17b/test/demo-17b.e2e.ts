import { newE2EPage } from '@stencil/core/testing';

describe('demo-17b', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-17b></demo-17b>');

    const element = await page.find('demo-17b');
    expect(element).toHaveClass('hydrated');
  });
});
