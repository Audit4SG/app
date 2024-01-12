import { generateTitleCase } from '..';

export const generateNodes = (flattenedOntologyData: any) => {
  let unprocessedNodes: any = [];
  let processedNodes: any = [];
  let blanks: any = [];

  flattenedOntologyData.map((item: any) => {
    if (item['@type'].length === 1) {
      if (item['@type'][0].split('#')[1] === 'Class') {
        if (item['@id'].includes('_:b')) {
          blanks.push(item);
        } else {
          unprocessedNodes.push(item);
        }
      }
    }
  });

  unprocessedNodes.map((unprocessedNode: any) => {
    let id: string = unprocessedNode['@id'];
    let label: string = generateTitleCase(id.split('#')[1]);
    let description = '';
    let provocation = '';
    let references = '';
    let subClassOf: string = '';

    if (unprocessedNode['http://www.w3.org/2000/01/rdf-schema#description']) {
      description = unprocessedNode['http://www.w3.org/2000/01/rdf-schema#description'][0]['@value'];
    } else {
      description = '(To be updated)';
    }

    if (unprocessedNode['http://www.w3.org/2000/01/rdf-schema#provocation']) {
      provocation = unprocessedNode['http://www.w3.org/2000/01/rdf-schema#provocation'][0]['@value'];
    } else {
      provocation = '(To be updated)';
    }

    if (unprocessedNode['http://www.w3.org/2000/01/rdf-schema#references']) {
      references = unprocessedNode['http://www.w3.org/2000/01/rdf-schema#references'][0]['@value'];
    } else {
      references = '(To be updated)';
    }

    if (unprocessedNode['http://www.w3.org/2000/01/rdf-schema#subClassOf']) {
      subClassOf = unprocessedNode['http://www.w3.org/2000/01/rdf-schema#subClassOf'][0]['@id'];
    }

    let obj = {
      id: id,
      label: label,
      description: description,
      provocation: provocation,
      references: references,
      subClassOf: subClassOf,
    };

    processedNodes.push(obj);
  });

  return processedNodes;
};
