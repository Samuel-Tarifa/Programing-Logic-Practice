function insertionSort(array) {
  let NTI;
  let SE = array[0];

  for (let i = 1; i < array.length; i++) {
    NTI = array[i];

    for (let j = i; j > 0; j--) {
      if (SE < NTI) {
        array[j] = NTI;
        SE = array[i];
        break;
      } else {
        array[j] = SE;
        if (j !== 1) SE = array[j - 2];
        else {
          array[0] = NTI;
          break;
        }
      }
    }
  }
  return array;
}

const arr = [-6, -8 - 9, 12, 3, 4, 20, 8, -2, 4];
console.log("resultado", insertionSort(arr)); //[ -17, -6, -2,  3, 4, 4,  8, 12, 20]
