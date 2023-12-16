import { newE2EPage } from '@stencil/core/testing';

describe('demo-20b', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-20b></demo-20b>');

    const element = await page.find('demo-20b');
    expect(element).toHaveClass('hydrated');
  });
});
