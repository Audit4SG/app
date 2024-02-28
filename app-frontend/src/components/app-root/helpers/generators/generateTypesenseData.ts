export const generateTypesenseData = (nodes: any, flattenedOntologyData: any) => {
  let typesenseDataJsonArray: any = [];

  nodes.map((node: any) => {
    let obj = {
      label: node.label,
      type: 'Class',
      description: node.description,
      provocation: node.provocation,
      references: node.references,
    };
    typesenseDataJsonArray.push(obj);
  });

  flattenedOntologyData.map((item: any) => {
    let type = item['@type'][0];
    let objectProperty: string = '';
    if (type.split('#')[1] === 'ObjectProperty') {
      objectProperty = item['@id'].split('#')[1];
      let obj = {
        label: objectProperty,
        type: 'Relation',
        description: '',
        provocation: '',
        references: '',
      };
      typesenseDataJsonArray.push(obj);
    }
  });

  console.log(typesenseDataJsonArray);
};
