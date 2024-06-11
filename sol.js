var subarraysDivByK = function(nums, k) {
  // Inicializa el contador de submatrices divisibles por k
  let count = 0;

  // Mapa para almacenar el número de veces que un resto aparece
  const remainderMap = new Map();
  // Inicializa el mapa con el resto 0 que ocurre una vez
  remainderMap.set(0, 1);

  // Variable para almacenar la suma acumulativa
  let cumulativeSum = 0;

  // Itera a través de la matriz
  for (const num of nums) {
    // Actualiza la suma acumulativa
    cumulativeSum += num;

    // Calcula el resto de la suma acumulativa con respecto a k
    let remainder = ((cumulativeSum % k) + k) % k;

    // Si el resto ya está en el mapa, significa que hay submatrices que suman múltiplos de k
    if (remainderMap.has(remainder)) {
      count += remainderMap.get(remainder);
    }

    // Actualiza el mapa con el nuevo resto
    remainderMap.set(remainder, (remainderMap.get(remainder) || 0) + 1);
  }

  return count;
};

console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5)); // Output: 7
