const tokenize = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);

export const similarityScore = (left, right) => {
  const leftTokens = new Set(tokenize(left));
  const rightTokens = new Set(tokenize(right));
  if (!leftTokens.size || !rightTokens.size) return 0;

  const intersection = [...leftTokens].filter((token) => rightTokens.has(token)).length;
  const union = new Set([...leftTokens, ...rightTokens]).size;
  return intersection / union;
};

export const isSimilarProduct = (left, right, threshold = 0.35) =>
  similarityScore(`${left.name} ${left.quantity}`, `${right.name} ${right.quantity}`) >= threshold;
