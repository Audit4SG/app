import { state } from '../../store/store';

export const getLengthOfCardStack = () => {
  let cardStack: any = JSON.parse(state.cardStack);
  return cardStack.length;
};
