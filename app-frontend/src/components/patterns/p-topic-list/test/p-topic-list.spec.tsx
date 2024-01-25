import { newSpecPage } from '@stencil/core/testing';
import { PTopicList } from '../p-topic-list';

describe('p-topic-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PTopicList],
      html: `<p-topic-list></p-topic-list>`,
    });
    expect(page.root).toEqualHtml(`
      <p-topic-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-topic-list>
    `);
  });
});
