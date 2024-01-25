import { Component, Prop, State, Host, Listen, FunctionalComponent, Watch, h } from '@stencil/core';
import { state } from '../../../global/script';
import { gsap } from 'gsap';

@Component({
  tag: 'p-card-stack',
  styleUrl: 'p-card-stack.css',
  shadow: true,
})
export class PCardStack {
  compactCardStack!: HTMLDivElement;
  mainList!: HTMLElement;

  @Listen('buttonClick') handleButtonClick(e) {
    if (e.detail.action === 'toggleCompactCardStack') {
      this.toggleCompactCardStack();
    }
  }

  @Prop() data: any;

  @State() variant: string = 'basic';
  @State() cardStack: any = [];
  @State() isCompactCardStackExpanded: boolean = false;

  @Watch('data') watchActionStatus(newVal: boolean, oldVal: boolean) {
    if (newVal != oldVal) {
      this.generateCardStack();
    }
  }

  private tl: any = gsap.timeline();

  componentWillLoad() {
    this.generateCardStack();
  }

  generateCardStack() {
    if (this.data.length === 0) {
      this.cardStack = [];
      return;
    }
    this.cardStack = [...this.data];
  }

  toggleCompactCardStack() {
    if (!this.isCompactCardStackExpanded) {
      this.tl.to(this.compactCardStack, { width: '600px', height: 'auto', duration: 0.25 });
      // this.tl.to(this.downloadButtonContainer, { display: 'block', duration: 0 });
      // this.tl.to(this.downloadButtonContainer, { opacity: 1, duration: 0.25 });
      this.tl.to(this.mainList, { opacity: 1, duration: 0.25 });
    } else {
      this.tl.to(this.mainList, { opacity: 0, duration: 0.25 });
      //  this.tl.to(this.downloadButtonContainer, { opacity: 1, duration: 0.25 });
      //  this.tl.to(this.downloadButtonContainer, { display: 'none', duration: 0 });
      this.tl.to(this.compactCardStack, { width: '250px', height: '32px', duration: 0.25 });
    }
    this.isCompactCardStackExpanded = !this.isCompactCardStackExpanded;
  }

  BasicCardStack: FunctionalComponent = () =>
    this.cardStack.map(item => (
      <p-card-basic
        nodeId={item.id}
        label={item.label}
        definition={item.definition}
        provocation={item.provocation}
        reference={item.references}
        expand={state.isMenuOpen || this.cardStack.length > 2 ? false : true}
      ></p-card-basic>
    ));

  CompactCardStack: FunctionalComponent = () => (
    <div class="compact-list-container" ref={el => (this.compactCardStack = el as HTMLDivElement)}>
      <header>
        <l-row justify="space-between" align="center">
          <l-row>
            <e-text>Selected</e-text>
            &nbsp;&nbsp;
            <e-button action="openAuditSummary">{this.cardStack.length} nodes</e-button>
          </l-row>

          <l-row justify="space-between" align="center">
            <e-button variant="transparent" action="toggleCompactCardStack">
              {this.isCompactCardStackExpanded ? <ph-minus-circle size="1.5em" /> : <ph-caret-circle-down size="1.5em" />}
            </e-button>
            <e-button variant="transparent" action="deleteAllCards">
              <ph-x-circle size="1.5em" />
            </e-button>
          </l-row>
        </l-row>{' '}
      </header>
      <main ref={el => (this.mainList = el as HTMLElement)}>
        <div class="column column-1">
          {this.cardStack.map(
            (item: any, index: any) =>
              index % 2 === 0 && (
                <p-card-compact nodeId={item.id} label={item.label} description={item.definition} provocation={item.provocation} references={item.references}></p-card-compact>
              ),
          )}
        </div>
        <div class="column column-2">
          {this.cardStack.map(
            (item: any, index: any) =>
              index % 2 != 0 && (
                <p-card-compact nodeId={item.id} label={item.label} description={item.definition} provocation={item.provocation} references={item.references}></p-card-compact>
              ),
          )}
        </div>
      </main>
    </div>
  );

  render() {
    return (
      <Host>
        {this.cardStack.length > 0 && <div>{this.cardStack.length < 5 ? <this.BasicCardStack></this.BasicCardStack> : <this.CompactCardStack></this.CompactCardStack>}</div>}
      </Host>
    );
  }
}
