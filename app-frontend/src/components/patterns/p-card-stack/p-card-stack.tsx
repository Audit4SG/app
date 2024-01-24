import { Component, Prop, State, Host, FunctionalComponent, Watch, h } from '@stencil/core';

@Component({
  tag: 'p-card-stack',
  styleUrl: 'p-card-stack.css',
  shadow: true,
})
export class PCardStack {
  @State() variant: string = 'basic';
  @Prop() item: string;

  Basic: FunctionalComponent = () => <div></div>;

  CompactBasic: FunctionalComponent = () => <div></div>;

  CompactStacked: FunctionalComponent = () => <div></div>;

  render() {
    return (
      <Host>
        <p-card-stack-item
          label="Test"
          definition="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
          provocation="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
          reference="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
        ></p-card-stack-item>
      </Host>
    );
  }
}
