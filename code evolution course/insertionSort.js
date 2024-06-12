function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let numberToInsert = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > numberToInsert) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = numberToInsert;
  }
  return array;
}

const arr = [-6, -8 - 9, 12, 3, 4, 20, 8, -2, 4];
console.log("resultado", insertionSort(arr)); //[ -17, -6, -2,  3, 4, 4,  8, 12, 20]
