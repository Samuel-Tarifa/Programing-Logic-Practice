var relativeSortArray = function (arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        result.push(arr1[j]);
        arr1.splice(j, 1);
        j--
      }
    }
  }

  const sorted=arr1.sort((a,b)=>a-b)

  return result.concat(sorted);

};

const arr1 = [2, 3, 1, 3, 2, 4, 6, 19, 9, 2, 7];
const arr2 = [2, 1, 4, 3, 9, 6];

console.log(relativeSortArray(arr1, arr2));
