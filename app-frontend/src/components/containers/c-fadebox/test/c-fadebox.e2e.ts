import { newE2EPage } from '@stencil/core/testing';

describe('c-fadebox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<c-fadebox></c-fadebox>');

    const element = await page.find('c-fadebox');
    expect(element).toHaveClass('hydrated');
  });
});
