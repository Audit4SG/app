export const generateNodeRelations = (nodes: any, flattenedOntologyData: any) => {
  let nodeRelations: any = [];
  nodes.map((x: any) => {
    nodes.map((y: any) => {
      if (x.id === y.subClassOf) {
        let obj = {
          target: y.id,
          source: x.id,
          strength: 0.01,
        };
        nodeRelations.push(obj);
      }
    });
  });
  flattenedOntologyData.map((item: any) => {
    let type = item['@type'][0];
    let objectProperty: string = '';
    let domain: string = '';
    let range: string = '';

    if (type.split('#')[1] === 'ObjectProperty') {
      objectProperty = item['@id'].split('#')[1];
      if (item['http://www.w3.org/2000/01/rdf-schema#domain']) {
        domain = item['http://www.w3.org/2000/01/rdf-schema#domain'][0]['@id'];
      }

      if (item['http://www.w3.org/2000/01/rdf-schema#range']) {
        range = item['http://www.w3.org/2000/01/rdf-schema#range'][0]['@id'];
      }

      if (domain.length > 0 && range.length > 0) {
        let obj = {
          target: range,
          source: domain,
          strength: 0.1,
          label: objectProperty,
        };
        nodeRelations.push(obj);
      }
    }
  });
  return nodeRelations;
};
