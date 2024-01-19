import { createStore } from '@stencil/store';

export const { state } = createStore({
  cardStack: '',
  nodes: '',
  nodeRelations: '',
  topics: '',
  isInitialized: false,
  isMenuOpen: false,
  journey: 'selection',
  sessionId: '',
});
