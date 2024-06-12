function quickSort(array) {
  if (array.length <= 1) return array;
  let pivot = array[array.length - 1];
  const leftArray = [];
  const rightArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      leftArray.push(array[i]);
    } else {
      rightArray.push(array[i]);
    }
  }
  return [...quickSort(leftArray),pivot,...quickSort(rightArray)];
}

const arr = [5, -6, -6, 9, 2, 123, 32, -213, 20, 8, -2, 4];
console.log(quickSort(arr));
