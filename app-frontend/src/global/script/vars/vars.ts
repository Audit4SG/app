export const Vars = {
  api: {
    url: document.domain === 'localhost' ? 'http://localhost:3334' : 'https://app-api.audit4sg.org',
    endpoints: {
      getOntology: 'ontology',
      cards: 'cards',
    },
  },
};
