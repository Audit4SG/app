import { createStore } from '@stencil/store';

export const { state } = createStore({
  nodeItemVariant: 'default',
  sessionId: '',
});
