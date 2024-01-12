export const generateNodeRelations = (nodes: any) => {
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
  return nodeRelations;
};
