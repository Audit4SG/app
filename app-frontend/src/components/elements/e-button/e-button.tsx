import { Component, Event, EventEmitter, FunctionalComponent, Watch, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'e-button',
  styleUrl: 'e-button.css',
  shadow: true,
})
export class EButton {
  @Prop() action: string;
  @Prop() value: any;
  @Prop() variant: string = 'primary';
  @Prop() size: string = 'default';
  @Prop() disabled: boolean = false;
  @Prop() active: boolean = false;
  @Prop() theme: string;

  @State() buttonTheme: string;
  @State() inAction: boolean = false;

  @Event({
    eventName: 'buttonClick',
    bubbles: true,
  })
  event_ButtonClick: EventEmitter;

  @Watch('active') watchActionStatus(newVal: boolean, oldVal: boolean) {
    if (newVal != oldVal) {
      this.inAction = newVal;
    }
  }

  @Watch('theme') watchThemeStatus(newVal: string, oldVal: string) {
    if (newVal != oldVal) {
      this.buttonTheme = newVal;
    }
    this.generateStyleClasses();
  }

  private handle_ButtonClick(e) {
    e.preventDefault();
    this.event_ButtonClick.emit({
      action: this.action,
      value: this.value,
    });
  }

  private styleClasses: string = '';

  componentWillLoad() {
    this.inAction = this.active;
    this.generateStyleClasses();
  }

  generateStyleClasses() {
    this.styleClasses = `${this.variant} ${this.size}`;
    if (this.theme) {
      this.buttonTheme = this.theme;
      this.styleClasses = `${this.styleClasses} ${this.variant}--${this.buttonTheme}`;
    }
  }

  Spinner: FunctionalComponent = () => (
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );

  render() {
    return (
      <button class={`${this.styleClasses} ${this.inAction && 'in-action'}`} onClick={e => this.handle_ButtonClick(e)} disabled={this.disabled || this.inAction}>
        {this.inAction ? <this.Spinner></this.Spinner> : <slot />}
      </button>
    );
  }
}
