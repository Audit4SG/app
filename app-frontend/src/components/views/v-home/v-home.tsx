import { Component, h } from '@stencil/core';

@Component({
  tag: 'v-home',
  styleUrl: 'v-home.css',
  shadow: true,
})
export class VHome {
  render() {
    return (
      <c-page>
        <main>
          <e-text variant="display">RelAiO</e-text>
          <e-text variant="heading">A relational ethics based AI auditing ontology</e-text>
          <l-spacer value={1}></l-spacer>
          <l-seperator></l-seperator>
          <l-spacer value={2}></l-spacer>
          <e-text>
            Introductory paragraph about the project, ontology and the tool. Lorem ipsum incoming.. It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content
            here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their infancy.
          </e-text>
          <l-spacer value={2}></l-spacer>
          <l-seperator></l-seperator>
          <l-spacer value={2}></l-spacer>

          <e-button action="route" value={'audit'}>
            Start Auditing
          </e-button>

          <l-spacer value={2}></l-spacer>
          <l-seperator></l-seperator>
          <l-spacer value={2}></l-spacer>

          <e-text>
            <strong>Resources</strong>
          </e-text>
          <ul>
            <li>
              <e-link>Link 1</e-link>
            </li>
            <li>
              <e-link>Link 2</e-link>
            </li>
            <li>
              <e-link>Link 3</e-link>
            </li>
          </ul>
        </main>
      </c-page>
    );
  }
}
