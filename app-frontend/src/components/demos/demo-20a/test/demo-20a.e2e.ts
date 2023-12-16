import { newE2EPage } from '@stencil/core/testing';

describe('demo-20a', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-20a></demo-20a>');

    const element = await page.find('demo-20a');
    expect(element).toHaveClass('hydrated');
  });
});
