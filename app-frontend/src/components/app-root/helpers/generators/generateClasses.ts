import { generateTitleCase } from '../';

export const generateClasses = (flattenedOntologyData: any) => {
  let unprocessedClasses: any = [];
  let processedClasses: any = [];
  let blanks: any = [];

  flattenedOntologyData.map((item: any) => {
    if (item['@type'].length === 1) {
      if (item['@type'][0].split('#')[1] === 'Class') {
        if (item['@id'].includes('_:b')) {
          blanks.push(item);
        } else {
          unprocessedClasses.push(item);
        }
      }
    }
  });

  unprocessedClasses.map((rawClass: any) => {
    let id: string = rawClass['@id'];
    let label: string = generateTitleCase(id.split('#')[1]);
    let description = '';
    let provocation = '';
    let references = '';
    let subClassOf: string = '';

    if (rawClass['http://www.w3.org/2000/01/rdf-schema#description']) {
      description = rawClass['http://www.w3.org/2000/01/rdf-schema#description'][0]['@value'];
    } else {
      description = '(To be updated)';
    }

    if (rawClass['http://www.w3.org/2000/01/rdf-schema#provocation']) {
      provocation = rawClass['http://www.w3.org/2000/01/rdf-schema#provocation'][0]['@value'];
    } else {
      provocation = '(To be updated)';
    }

    if (rawClass['http://www.w3.org/2000/01/rdf-schema#references']) {
      references = rawClass['http://www.w3.org/2000/01/rdf-schema#references'][0]['@value'];
    } else {
      references = '(To be updated)';
    }

    if (rawClass['http://www.w3.org/2000/01/rdf-schema#subClassOf']) {
      subClassOf = rawClass['http://www.w3.org/2000/01/rdf-schema#subClassOf'][0]['@id'];
    }

    let obj = {
      id: id,
      label: label,
      description: description,
      provocation: provocation,
      references: references,
      subClassOf: subClassOf,
    };

    processedClasses.push(obj);
  });

  console.log(processedClasses);
};
