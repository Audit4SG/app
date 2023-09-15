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
  @Event({
    eventName: 'textInput',
    bubbles: true,
  })
  event_TextInput: EventEmitter;

  @Event({
    eventName: 'radioInput',
    bubbles: true,
  })
  event_RadioInput: EventEmitter;

  @Event({
    eventName: 'checkboxInput',
    bubbles: true,
  })
  event_CheckboxInput: EventEmitter;

  @Prop() label: string;
  @Prop() type: string;
  @Prop() name: string;
  @Prop() placeholder: string = 'Your text';
  @Prop() value: string;
  @Prop() checked: boolean = false;

  // @Watch('checked')
  // checkedWatcher(newVal: boolean, oldVal: boolean) {
  //   if (newVal != oldVal) {
  //     if (this.checked) {
  //       this.action = 'remove';
  //     } else {
  //       this.action = 'add';
  //     }
  //   }
  // }

  private styleObject_Textbox: LooseObject = {};
  private action: string = 'add';

  componentWillLoad() {
    if (this.type === 'email' || this.type === 'number' || this.type === 'password' || this.type === 'text') {
      this.generate_StyleObject_Textbox();
    }

    if (this.type === 'checkbox' && this.checked) {
      this.action = 'remove';
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

  handle_AlphanumericInput(e) {
    this.event_TextInput.emit({
      name: this.name,
      value: e.target.value.trim(),
    });
  }

  handle_RadioChange(e) {
    this.event_RadioInput.emit({
      name: this.name,
      value: e.target.value,
    });
  }

  handle_CheckboxChange(e) {
    this.event_CheckboxInput.emit({
      name: this.name,
      value: e.target.value,
      action: this.action,
    });

    if (this.action === 'add') {
      this.action = 'remove';
    } else if (this.action === 'remove') {
      this.action = 'add';
    }
  }

  render() {
    if (this.type === 'email' || this.type === 'number' || this.type === 'password' || this.type === 'text') {
      return <input style={this.styleObject_Textbox} type={this.type} placeholder={this.placeholder} onInput={e => this.handle_AlphanumericInput(e)} />;
    } else if (this.type === 'checkbox') {
      return (
        <l-row>
          <input id={this.name} type={this.type} name={this.name} value={this.value} checked={this.checked} onChange={e => this.handle_CheckboxChange(e)} />
          <l-spacer variant="horizontal" value={0.15}></l-spacer>
          <label htmlFor={this.name}>{this.label}</label>
        </l-row>
      );
    } else if (this.type === 'radio') {
      return (
        <l-row>
          <input id={this.name} type={this.type} name={this.name} value={this.value} checked={this.checked} onChange={e => this.handle_RadioChange(e)} />
          &nbsp;&nbsp; <label htmlFor={this.name}>{this.label}</label>
        </l-row>
      );
    }
  }
}
