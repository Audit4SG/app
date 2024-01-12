import { createStore } from '@stencil/store';

export const { state } = createStore({
  nodes: '',
  nodeRelations: '',
  objectRelations: '',
  topics: '',
  isInitialized: false,
  journey: 'selection',
  sessionId: '',
});
