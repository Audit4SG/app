import { Component, Event, EventEmitter, Listen, h } from '@stencil/core';
import { state } from '../../../global/script';
import { helper_UserControl_Api_Logout } from './helpers';

@Component({
  tag: 'p-user-control',
  styleUrl: 'p-user-control.css',
  shadow: true,
})
export class PUserControl {
  @Event({
    eventName: 'event_RouteTo',
    bubbles: true,
  })
  event_RouteTo: EventEmitter;

  @Listen('event_LinkClick') handle_LinkClick(e) {
    if (e.detail.action === 'logout') {
      this.handle_Logout();
    }
  }

  async handle_Logout() {
    let { isSuccess_Logout_Submission, message_Logout_Submission, payload_Logout_Submission } = await helper_UserControl_Api_Logout();
    if (!isSuccess_Logout_Submission) {
      return alert(`❌ ${message_Logout_Submission}`);
    }

    if (!payload_Logout_Submission.success) {
      return alert(`❌ ${payload_Logout_Submission.message}`);
    }

    state.isActive_Session = payload_Logout_Submission.isActive_Session;

    this.event_RouteTo.emit({
      type: 'push',
      route: '/login',
      data: {},
    });
  }

  render() {
    return (
      <c-card>
        <l-row>
          <ion-icon name="person-outline"></ion-icon>
          <l-spacer variant="horizontal" value={0.25}></l-spacer>
          <e-text>{state.account_FirstName}</e-text>
        </l-row>
        <l-spacer value={0.5}></l-spacer>
        <l-seperator></l-seperator>
        <l-spacer value={0.5}></l-spacer>
        <e-link action="settings" event={true}>
          <l-row>
            <ion-icon name="settings-outline"></ion-icon>
            <l-spacer variant="horizontal" value={0.25}></l-spacer>
            <e-text>Settings</e-text>
          </l-row>
        </e-link>
        <l-spacer value={0.5}></l-spacer>
        <e-link theme="danger" action="logout" event={true}>
          <l-row>
            <ion-icon name="log-out-outline"></ion-icon>
            <l-spacer variant="horizontal" value={0.25}></l-spacer>
            <e-text>Logout</e-text>
          </l-row>
        </e-link>
      </c-card>
    );
  }
}
