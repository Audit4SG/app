import { state } from '../../store/store';

export const popOutOfCardStack = (topicId: string) => {
  let cardStack: any = JSON.parse(state.cardStack);
  cardStack = cardStack.filter(obj => obj.id != topicId);
  state.cardStack = JSON.stringify(cardStack);
};
