import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

interface LooseObject {
  [key: string]: any;
}

@Component({
  tag: 'e-input',
  styleUrl: 'e-input.css',
  shadow: true,
})
export class EInput {
  inputEl!: HTMLInputElement;

  @Prop() label: string;
  @Prop() type: string;
  @Prop() name: string;
  @Prop() placeholder: string = 'Your text';
  @Prop() value: string;
  @Prop() checked: boolean = false;
  @Prop() action: string = '';

  private styleObject_Textbox: LooseObject = {};

  @Event({
    eventName: 'inputEvent',
    bubbles: true,
  })
  inputEventEmitter: EventEmitter;

  componentWillLoad() {
    if (this.type === 'email' || this.type === 'number' || this.type === 'password' || this.type === 'text') {
      this.generate_StyleObject_Textbox();
    }
  }

  generate_StyleObject_Textbox() {
    this.styleObject_Textbox.padding = '0.5em';
    this.styleObject_Textbox.border = '1px solid rgba(0, 0, 0, 0.3)';
    this.styleObject_Textbox.borderRadius = '0.25em';
    this.styleObject_Textbox.fontSize = '0.9em';
    this.styleObject_Textbox.width = '100%';
    this.styleObject_Textbox.boxSizing = 'border-box';
  }

  onInput(e) {
    this.inputEventEmitter.emit({
      name: this.name,
      value: e.target.value.trim(),
      isChecked: this.inputEl ? this.inputEl.checked : undefined,
    });
  }

  render() {
    if (this.type === 'email' || this.type === 'number' || this.type === 'password' || this.type === 'text') {
      return <input style={this.styleObject_Textbox} type={this.type} placeholder={this.placeholder} onInput={e => this.onInput(e)} />;
    } else if (this.type === 'radio') {
      return (
        <l-row>
          <input id={this.name} type={this.type} name={this.name} value={this.value} checked={this.checked} onChange={e => this.onInput(e)} />
          <l-spacer variant="horizontal" value={0.3}></l-spacer>
          <label htmlFor={this.name}>{this.label}</label>
        </l-row>
      );
    } else if (this.type === 'checkbox') {
      return (
        <label class="container">
          {this.label}
          <input id={this.name} type={this.type} name={this.name} value={this.value} onChange={e => this.onInput(e)} ref={el => (this.inputEl = el as HTMLInputElement)} />
          <span class="checkmark"></span>
        </label>
      );
    }
  }
}
