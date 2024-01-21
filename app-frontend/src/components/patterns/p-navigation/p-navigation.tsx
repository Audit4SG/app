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
      if (!state.isMenuOpen) {
        state.activeMenuItem = '';
      }
    } else if (e.detail.action === 'selectMenuItem') {
      if (state.activeMenuItem === e.detail.value) {
        state.activeMenuItem = '';
        return;
      }
      state.activeMenuItem = e.detail.value;
      if (state.activeMenuItem === 'howTo') {
        state.activeMenuLabel = 'How to';
      } else if (state.activeMenuItem === 'share') {
        state.activeMenuLabel = 'Share your audit with this link';
      } else if (state.activeMenuItem === 'about') {
        state.activeMenuLabel = 'About';
      } else if (state.activeMenuItem === 'credits') {
        state.activeMenuLabel = 'Credits';
      }
    } else if (e.detail.action === 'closeMenuItem') {
      state.activeMenuItem = '';
    } else if (e.detail.action === 'copyShareableLink') {
      this.isLinkCopied = true;
      navigator.clipboard.writeText(state.shareUrl);
      setTimeout(() => {
        this.isLinkCopied = false;
      }, 1000);
    } else if (e.detail.action === 'viewSelectionSummary') {
      window.open(state.shareUrl);
    }
  }

  @State() isLinkCopied: boolean = false;

  HowToContent: FunctionalComponent = () => (
    <c-fadebox maxHeight="60vh" overflow="scroll">
      <e-list bullet="disc">
        <e-list-item>
          In the beginning you have two options. You can:
          <e-list bullet="circle">
            <l-spacer value={1.5}></l-spacer>
            <e-list-item>Start with some broad topics that interest, concern, or fascinate you. Mix and match at varying degrees of granularity.</e-list-item>
            <l-spacer value={1.5}></l-spacer>
            <e-list-item>
              Or explore the range of concerns that we could think of and mix and match as per your approach or situation. Choose only one aspect or choose them all!
            </e-list-item>
          </e-list>
        </e-list-item>
        <e-list-item>
          he web tool will throw you into a network that could be explored when exploring ethical concerns concerning artificial intelligence. As a user, you can determine which
          aspects are relevant for you and the system or organization you are investigating or exploring. You can also interrogate the fundamental ethical parameters and approaches
          that AI ethicists hold dear and sacrosanct. All is up for unpacking. If something does not make sense to you, let those aspects be. You can always come back to them
          later.
        </e-list-item>
        <l-spacer value={1.5}></l-spacer>
        <e-list-item>
          If the network feels overwhelming, try using the search bar. You can drop in any word or phrase to see the closest possible semantic matches within the existing network
          of relationships. Note: It uses OpenAI API for semantic processing to show the best and most relevant results. It recommends both nodes (classes) and relationships
          (objects).
        </e-list-item>
        <l-spacer value={1.5}></l-spacer>
        <e-list-item>
          Once you have stacked up the desired cards on the left you can save/export/share your customized methodology for future reference. You can come back to the web tool from
          the export to edit the methodology if you so wish at any point in time. The export/share feature uses anonymized cookies and no personal information about the user is
          collected.
        </e-list-item>
        <l-spacer value={1.5}></l-spacer>
        <e-list-item>
          For more research-y people, cards also include references and quotes that inform the provocations. All references can be found in the Zotero library linked on the
          homepage and the About section.
        </e-list-item>
        <l-spacer value={1.5}></l-spacer>
        <e-list-item>
          There is a node called “not listed”. Select it if your concerns are not covered within the existing network. The network of relationships is constructed on the “open
          world assumption” i.e., anything that is not represented and covered within the existing ontology can possibly exist.
        </e-list-item>
      </e-list>
    </c-fadebox>
  );

  ShareContent: FunctionalComponent = () => (
    <div>
      {state.cardStack.length > 0 ? (
        <div>
          <div class="share-url-container">
            <e-text>{state.shareUrl}</e-text>
          </div>
          <l-spacer value={1}></l-spacer>
          <l-row justify="space-between" align="center">
            <e-button action="viewSelectionSummary" variant="secondary">
              View Summary
            </e-button>
            {this.isLinkCopied ? <e-text theme="success">Link copied!</e-text> : <e-button action="copyShareableLink">Copy Link</e-button>}
          </l-row>
        </div>
      ) : (
        <e-text>You have nothing to share. In order to share your audit, kindly select a few nodes.</e-text>
      )}
    </div>
  );

  AboutContent: FunctionalComponent = () => (
    <c-fadebox maxHeight="60vh" overflow="scroll">
      <e-text>
        AI4SG is an exploratory tool that sees ethics as emergent. Its premise is that ethical relationships develop in relation. To audit the ethical claims of AI is to pay
        attention to those relations.
      </e-text>
      <l-spacer value={1.5}></l-spacer>
      <e-text>
        AI4SG presents an incomplete ontology (knowledge graph) of entities and relations encircling AI systems. A user can interact with the ontology and build their own AI ethics
        auditing methodology using the provocations or definitions corresponding to each entity or relation in the ontology.
      </e-text>
      <l-spacer value={1.5}></l-spacer>
      <e-text>
        The tool is meant to be exploratory. It is not a checklist. It may take longer and appear cumbersome, but it might help thoughts move in new directions. The tool aims to
        provoke and not solve. The auditing questions are provocations to open up not just the black box of AI algorithms but the black box of the network of relationships that
        constitute AI.
      </e-text>
      <l-spacer value={1.5}></l-spacer>
      <e-text>
        Keep in mind: It’s a proof-of-concept (a pre-alpha release). An early intervention to interrupt the AI checklist mode of AI ethical auditing. We are still looking for ways
        to take this interruption forward.
      </e-text>
      <l-spacer value={1.5}></l-spacer>
      <e-text>
        Do you have questions, suggestions, or feedback? Please write to us at:
        <br /> <u>debarun[at]outlook.com</u> or <u>cheshtaarora[at]outlook.in</u>
      </e-text>
      <l-spacer value={1.5}></l-spacer>
      <e-text>
        <strong>Github:</strong>
      </e-text>
      <l-row>
        <e-link href="https://github.com/Audit4SG/app" target="_blank">
          <u>https://github.com/Audit4SG/app</u>
        </e-link>
        &nbsp;&nbsp;
        <e-text>(Frontend)</e-text>
      </l-row>
      <l-row>
        <e-link href="https://github.com/Audit4SG/api" target="_blank">
          <u>https://github.com/Audit4SG/api</u>
        </e-link>
        &nbsp;&nbsp;
        <e-text>(Backend)</e-text>
      </l-row>
      <l-spacer value={1.5}></l-spacer>
      <e-text>
        <strong>Zotero:</strong>
      </e-text>
      <e-link href="https://www.zotero.org/groups/5339489/relaieo/library" target="_blank">
        <u>https://www.zotero.org/groups/5339489/relaieo/library</u>
      </e-link>
      <l-spacer value={1.5}></l-spacer>
      <e-text>
        <strong>Relational AI Ethics Ontology (RelAIO):</strong>
      </e-text>
      <l-row>
        <e-link href="https://ontology.audit4sg.org" target="_blank">
          <u>https://ontology.audit4sg.org</u>
        </e-link>
        &nbsp;&nbsp;
        <e-text>(To be updated)</e-text>
      </l-row>
    </c-fadebox>
  );

  CreditsContent: FunctionalComponent = () => (
    <c-fadebox maxHeight="60vh" overflow="scroll">
      <e-text>
        <strong>Cheshta Arora</strong>
      </e-text>
      <e-text>Researcher</e-text>
      <l-row>
        <e-text>ORCID:</e-text>
        &nbsp;
        <e-link href="https://orcid.org/0000-0003-2470-7783" target="_blank">
          <u>https://orcid.org/0000-0003-2470-7783</u>
        </e-link>
      </l-row>
      <l-spacer value={1.5}></l-spacer>
      <e-text>
        <strong>Debarun Sarkar</strong>
      </e-text>
      <e-text>Researcher</e-text>
      <l-row>
        <e-text>ORCID:</e-text>
        &nbsp;
        <e-link href="https://orcid.org/0000-0002-6873-4727" target="_blank">
          <u>https://orcid.org/0000-0002-6873-4727</u>
        </e-link>
      </l-row>
      <l-row>
        <e-text>Website:</e-text>
        &nbsp;
        <e-link href="https://debarun.noblogs.org" target="_blank">
          <u>https://debarun.noblogs.org</u>
        </e-link>
      </l-row>
      <l-spacer value={1.5}></l-spacer>
      <e-text>
        <strong>Rocco Donà</strong>
      </e-text>
      <e-text>Designer</e-text>
      <l-row>
        <e-text>Website:</e-text>
        &nbsp;
        <e-link href="https://rocco-dona.com" target="_blank">
          <u>https://rocco-dona.com</u>
        </e-link>
      </l-row>
      <l-spacer value={1.5}></l-spacer>
      <e-text>
        <strong>Tuhin Bhuyan</strong>
      </e-text>
      <e-text>Developer</e-text>
      <l-row>
        <e-text>Linkedin:</e-text>
        &nbsp;
        <e-link href="https://www.linkedin.com/in/xtbhyn" target="_blank">
          <u>https://www.linkedin.com/in/xtbhyn</u>
        </e-link>
      </l-row>
    </c-fadebox>
  );

  render() {
    return (
      <Host>
        <div class="menu-container__items">
          <e-button action="toggleMenu" variant="circle">
            {state.isMenuOpen ? <ph-x size="1.3em"></ph-x> : <ph-list size="1.3em"></ph-list>}
          </e-button>
          {state.isMenuOpen && (
            <e-button action="selectMenuItem" variant="pill" value="howTo" theme={state.activeMenuItem === 'howTo' ? 'dark' : 'light'}>
              How to
            </e-button>
          )}
          {state.isMenuOpen && (
            <e-button action="selectMenuItem" variant="pill" value="share" theme={state.activeMenuItem === 'share' ? 'dark' : 'light'}>
              Share
            </e-button>
          )}
          {state.isMenuOpen && (
            <e-button action="selectMenuItem" variant="pill" value="about" theme={state.activeMenuItem === 'about' ? 'dark' : 'light'}>
              About
            </e-button>
          )}
          {state.isMenuOpen && (
            <e-button action="selectMenuItem" variant="pill" value="credits" theme={state.activeMenuItem === 'credits' ? 'dark' : 'light'}>
              Credits
            </e-button>
          )}
        </div>
        {state.isMenuOpen && state.activeMenuItem.length > 0 && (
          <div class="menu-container__content">
            <l-row justify="space-between">
              <e-text variant="heading__menu">{state.activeMenuLabel}</e-text>
              <e-button variant="transparent" action="closeMenuItem">
                <ph-x-circle size="1.5em" />
              </e-button>
            </l-row>
            <l-spacer value={1}></l-spacer>
            {state.activeMenuItem === 'howTo' && <this.HowToContent></this.HowToContent>}
            {state.activeMenuItem === 'share' && <this.ShareContent></this.ShareContent>}
            {state.activeMenuItem === 'about' && <this.AboutContent></this.AboutContent>}
            {state.activeMenuItem === 'credits' && <this.CreditsContent></this.CreditsContent>}
          </div>
        )}
      </Host>
    );
  }
}
