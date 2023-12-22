import { createStore } from '@stencil/store';

export const { state } = createStore({
  isInitialized: false,
  sessionId: '',
  ontologyData: '',
});
