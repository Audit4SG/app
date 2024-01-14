import { createStore } from '@stencil/store';

export const { state } = createStore({
  cardStack: '',
  nodes: '',
  nodeRelations: '',
  topics: '',
  isInitialized: false,
  journey: 'selection',
  sessionId: '',
});
