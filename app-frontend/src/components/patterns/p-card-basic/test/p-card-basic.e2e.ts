import { newE2EPage } from '@stencil/core/testing';

describe('p-card-basic', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-card-basic></p-card-basic>');

    const element = await page.find('p-card-basic');
    expect(element).toHaveClass('hydrated');
  });
});
