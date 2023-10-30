import { newE2EPage } from '@stencil/core/testing';

describe('demo-17d', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-17d></demo-17d>');

    const element = await page.find('demo-17d');
    expect(element).toHaveClass('hydrated');
  });
});
