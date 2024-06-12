var subarraysDivByK = function (nums, k) {
  let count = 0;

  const remainderMap = new Map();
  //Inicializamos con un resto de 0
  remainderMap.set(0, 1);

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    const remainder = ((sum % k) + k) % k;

    if (remainderMap.has(remainder)) {
      count += remainderMap.get(remainder);
    }

    //Actualizamos el mapa
    remainderMap.set(remainder, (remainderMap.get(remainder) || 0) + 1);
  }
  return count;
};
