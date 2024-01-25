import { Component, Prop, Host, Watch, h } from '@stencil/core';
import { gsap } from 'gsap';

@Component({
  tag: 'p-modal',
  styleUrl: 'p-modal.css',
  shadow: true,
})
export class PModal {
  modalBackground!: HTMLDivElement;
  modalContent!: HTMLDivElement;

  @Prop() open: boolean = false;
  @Prop() nodeId: string;
  @Prop() label: string;
  @Prop() definition: string;
  @Prop() provocation: string;
  @Prop() references: string;

  @Watch('open') watchOpenProp(newVal: boolean, oldVal: boolean) {
    if (newVal != oldVal) {
      if (newVal) {
        this.openModal();
      } else {
        this.closeModal();
      }
    }
  }

  private tl: any = gsap.timeline();

  openModal() {
    this.tl.to(this.modalBackground, { display: 'flex', duration: 0 });
    this.tl.to(this.modalBackground, { opacity: 1, duration: 0.25 });
    this.tl.to(this.modalContent, { display: 'block', duration: 0 });
    this.tl.to(this.modalContent, { opacity: 1, duration: 0.25 });
  }

  closeModal() {
    this.tl.to(this.modalContent, { opacity: 0, duration: 0.25 });
    this.tl.to(this.modalContent, { display: 'none', duration: 0 });
    this.tl.to(this.modalBackground, { opacity: 0, duration: 0.25 });
    this.tl.to(this.modalBackground, { display: 'none', duration: 0 });
  }

  render() {
    return (
      <div class="modal__background" ref={el => (this.modalBackground = el as HTMLDivElement)}>
        <div class="modal__content" ref={el => (this.modalContent = el as HTMLDivElement)}>
          <l-row justify="space-between" align="center">
            <e-text variant="heading__menu">{this.label}</e-text>
            <e-button variant="transparent" action="closeModal" value={this.nodeId}>
              <ph-x-circle size="1.25em" />
            </e-button>
          </l-row>
          <l-spacer value={1}></l-spacer>
          <main>
            <e-text>
              <em>{this.definition}</em>
            </e-text>
            <l-spacer value={0.5}></l-spacer>
            <l-seperator></l-seperator>
            <l-spacer value={0.5}></l-spacer>
            <e-text>
              <strong>{this.provocation}</strong>
            </e-text>
            <l-spacer value={0.5}></l-spacer>
            <l-seperator></l-seperator>
            <l-spacer value={0.5}></l-spacer>
            <e-text>{this.references}</e-text>
          </main>
        </div>
      </div>
    );
  }
}
