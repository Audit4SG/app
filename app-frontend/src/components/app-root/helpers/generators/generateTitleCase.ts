export const generateTitleCase = (unprocessedLabelName: string) => {
  const articles = ['a', 'an', 'the'];
  const conjunctions = ['for', 'and', 'nor', 'but', 'or', 'yet', 'so'];
  const prepositions = ['with', 'at', 'from', 'into', 'upon', 'of', 'to', 'in', 'for', 'on', 'by', 'like', 'over', 'plus', 'but', 'up', 'down', 'off', 'near'];

  const replaceCharsWithSpace = unprocessedLabelName => unprocessedLabelName.replace(/[^0-9a-z&/\\]/gi, ' ').replace(/(\s\s+)/gi, ' ');
  const capitalizeFirstLetter = unprocessedLabelName => unprocessedLabelName.charAt(0).toUpperCase() + unprocessedLabelName.substr(1);
  const normalizeStr = unprocessedLabelName => unprocessedLabelName.toLowerCase().trim();
  const shouldCapitalize = (word, fullWordList, posWithinStr) => {
    if (posWithinStr == 0 || posWithinStr == fullWordList.length - 1) {
      return true;
    }
    return !(articles.includes(word) || conjunctions.includes(word) || prepositions.includes(word));
  };

  unprocessedLabelName = replaceCharsWithSpace(unprocessedLabelName);
  unprocessedLabelName = normalizeStr(unprocessedLabelName);

  let words = unprocessedLabelName.split(' ');
  if (words.length <= 2) {
    words = words.map(w => capitalizeFirstLetter(w));
  } else {
    for (let i = 0; i < words.length; i++) {
      words[i] = shouldCapitalize(words[i], words, i) ? capitalizeFirstLetter(words[i]) : words[i];
    }
  }

  return words.join(' ');
};
