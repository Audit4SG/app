import { newE2EPage } from '@stencil/core/testing';

describe('c-test', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<c-test></c-test>');

    const element = await page.find('c-test');
    expect(element).toHaveClass('hydrated');
  });
});
