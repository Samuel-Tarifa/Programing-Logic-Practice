function knapSack(items, capacity, index = items.length - 1, memo = {}) {
  const key = `${capacity}-${index}}`;
  if (memo[key] !== undefined) {
    return memo[key];
  }

  if (index < 0) return 0;

  let lastItem = items[index];

  if (lastItem.peso <= capacity) {
    memo[key] = Math.max(
      lastItem.valor +
        knapSack(items, capacity - lastItem.peso, index - 1, memo),
      knapSack(items, capacity, index - 1, memo)
    );
  } else {
    memo[key] = knapSack(items, capacity, index - 1, memo);
  }
  return memo[key];
}

const array = [
  { valor: 25, peso: 20 },
  { valor: 20, peso: 18 },
  { valor: 7, peso: 2 },
];

console.log(
  `El máximo valor que se puede llevar en la mochila es ${knapSack(array, 21)}`
); //[ {valor:20,peso10}, {valor:13,peso:6} ]
