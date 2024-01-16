export const generateTopics = (nodes: any, nodeRelations: any) => {
  let topics: any = [];
  let nodesWithParents: any = [];
  nodes.map((node: any) => {
    nodeRelations.map((nodeRelation: any) => {
      if (node.id === nodeRelation.target) {
        if (nodeRelation.type === 'nodeRelation') {
          nodesWithParents.push(node);
        }
      }
    });
  });

  let nodesWithoutParents = [];
  nodes.map((node: any) => {
    let nodeHasParents: boolean = false;
    nodesWithParents.map((nodeWithParent: any) => {
      if (node.id === nodeWithParent.id) {
        nodeHasParents = true;
      }
    });
    if (!nodeHasParents) {
      nodesWithoutParents.push(node);
    }
  });

  nodesWithoutParents.map(nodeWithoutParents => {
    let obj = {
      label: nodeWithoutParents.label,
      value: nodeWithoutParents.id,
    };
    topics.push(obj);
  });

  return topics;
};
