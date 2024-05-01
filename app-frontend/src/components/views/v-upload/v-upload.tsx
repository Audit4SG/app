import { Component, Host, Listen, State, h } from '@stencil/core';

@Component({
  tag: 'v-upload',
  styleUrl: 'v-upload.css',
  shadow: true,
})
export class VUpload {
  @Listen('buttonClick') handleButtonClick(e) {
    if (e.detail.action === 'upload') {
      this.upload();
    }
  }

  codeInputBox!: HTMLInputElement;
  uploadFileInput!: HTMLInputElement;

  private code: string = '';
  private file: any;

  @State() isUploadButtonDisabled: boolean = true;

  handleCodeInput(e) {
    this.code = e.target.value.trim();
    this.inputValidator();
  }

  handleFileUpload() {
    this.file = this.uploadFileInput.files[0];
    this.inputValidator();
  }

  inputValidator() {
    this.isUploadButtonDisabled = true;
    if (!this.file) {
      return;
    }
    if (!this.code) {
      return;
    }
    this.isUploadButtonDisabled = false;
  }

  async upload() {
    let url: string = document.domain === 'localhost' ? 'http://localhost:3334/upload-ontology' : 'https://app-api.audit4sg.org/upload-ontology';
    let formData = new FormData();
    formData.append('code', this.code);
    formData.append('file', this.file);
    let options: any = {
      method: 'POST',
      body: formData,
    };
    await fetch(url, options)
      .then(response => response.json())
      .then(async data => {
        if (data.success) {
          alert(`✅ ${data.message}`);
          this.code = '';
          this.file = '';
          this.isUploadButtonDisabled = true;
          this.codeInputBox.value = '';
          this.uploadFileInput.value = '';
        } else {
          alert(`❌ ${data.message}`);
        }
      })
      .catch(error => {
        console.log(`❌ ${error}`);
      });
  }

  render() {
    return (
      <Host>
        <div>
          <e-text>
            <strong>Upload ontology</strong>
          </e-text>
          <br />
          <e-text>1. Choose ontology file</e-text>
          <input type="file" onChange={() => this.handleFileUpload()} ref={el => (this.uploadFileInput = el as HTMLInputElement)} />
          <br />
          <br />
          <e-text>2. Enter Code</e-text>
          <input type="text" onInput={e => this.handleCodeInput(e)} placeholder="Code" ref={el => (this.codeInputBox = el as HTMLInputElement)}></input>
          <br />
          <br />
          <e-button action="upload" disabled={this.isUploadButtonDisabled}>
            Upload
          </e-button>
        </div>
      </Host>
    );
  }
}
