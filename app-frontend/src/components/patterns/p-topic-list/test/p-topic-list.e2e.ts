import { newE2EPage } from '@stencil/core/testing';

describe('p-topic-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-topic-list></p-topic-list>');

    const element = await page.find('p-topic-list');
    expect(element).toHaveClass('hydrated');
  });
});
