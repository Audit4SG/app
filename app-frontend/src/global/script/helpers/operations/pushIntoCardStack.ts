import { state } from '../../store/store';

export const pushIntoCardStack = (topicId: string) => {
  let nodes: any = JSON.parse(state.nodes);
  let cardStack: any = [];
  if (state.cardStack.length > 0) {
    cardStack = JSON.parse(state.cardStack);
  }
  let obj: any;
  nodes.map((node: any) => {
    if (node.id === topicId) {
      obj = node;
    }
  });
  cardStack.push(obj);
  state.cardStack = JSON.stringify(cardStack);
};
