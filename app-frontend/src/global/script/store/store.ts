import { createStore } from '@stencil/store';

export const { state } = createStore({
  cardStack: '',
  nodes: '',
  nodeRelations: '',
  objectRelations: '',
  topics: '',
  isInitialized: false,
  journey: 'selection',
  sessionId: '',
});
