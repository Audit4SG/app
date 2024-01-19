import { Component, State, Listen, Host, h, FunctionalComponent } from '@stencil/core';
import { state } from '../../../global/script';

@Component({
  tag: 'p-navigation',
  styleUrl: 'p-navigation.css',
  shadow: true,
})
export class PNavigation {
  @Listen('buttonClick') handleButtonClick(e) {
    if (e.detail.action === 'toggleMenu') {
      state.isMenuOpen = !state.isMenuOpen;
    }
  }

  render() {
    return (
      <Host>
        <e-button action="toggleMenu" variant="circle" theme={state.isMenuOpen ? 'dark' : 'light'}>
          {state.isMenuOpen ? <ph-x size="1.3em" color="white"></ph-x> : <ph-list size="1.3em"></ph-list>}
        </e-button>
        {state.isMenuOpen && (
          <e-button action="toggleMenuHowTo" variant="pill">
            How to
          </e-button>
        )}
        {state.isMenuOpen && (
          <e-button action="toggleMenuExport" variant="pill">
            Export
          </e-button>
        )}
        {state.isMenuOpen && (
          <e-button action="toggleMenuAbout" variant="pill">
            About
          </e-button>
        )}
        {state.isMenuOpen && (
          <e-button action="toggleMenuCredits" variant="pill">
            Credits
          </e-button>
        )}
      </Host>
    );
  }
}
