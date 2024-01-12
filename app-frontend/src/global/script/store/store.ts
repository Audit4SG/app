import { createStore } from '@stencil/store';

export const { state } = createStore({
  classes: '',
  classRelations: '',
  nodes: '',
  objectRelations: '',
  topics: '',
  isInitialized: false,
  journey: 'selection',
  sessionId: '',
});
