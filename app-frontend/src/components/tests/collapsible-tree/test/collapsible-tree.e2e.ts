import { newE2EPage } from '@stencil/core/testing';

describe('collapsible-tree', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<collapsible-tree></collapsible-tree>');

    const element = await page.find('collapsible-tree');
    expect(element).toHaveClass('hydrated');
  });
});
