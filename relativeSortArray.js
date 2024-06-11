/* 
1122. Relative Sort Array

Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2
should be placed at the end of arr1 in ascending order.
*/

var relativeSortArray1 = function (arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        result.push(arr1[j]);
        arr1.splice(j, 1);
        j--;
      }
    }
  }

  const sorted = arr1.sort((a, b) => a - b);

  return result.concat(sorted);
};

var relativeSortArray2 = function (arr1, arr2) {
  const sortedList = [];

  for (const n of arr2) {
    let index = -1;
    index = arr1.indexOf(n, index + 1);

    while (index !== -1) {
      sortedList.push(n);
      arr1[index] = null;
      index = arr1.indexOf(n, index + 1);
    }
  }

  return [
    ...sortedList,
    ...arr1.filter((a) => a !== null).sort((a, b) => a - b),
  ];
};

const arr1 = [2, 3, 1, 3, 2, 4, 6, 19, 9, 2, 7];
const arr2 = [2, 1, 4, 3, 9, 6];

console.log(relativeSortArray2(arr1, arr2));
