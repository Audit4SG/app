import { createStore } from '@stencil/store';

export const { state } = createStore({
  cardStack: '',
  nodes: '',
  nodeRelations: '',
  topics: '',
  isInitialized: false,
  isMenuOpen: false,
  activeMenuItem: '',
  activeMenuLabel: '',
  journey: 'selection',
  sessionId: '',
  shareUrl: '',
});
