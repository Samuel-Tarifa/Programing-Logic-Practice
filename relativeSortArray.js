var relativeSortArray = function (arr1, arr2) {
  const result = []

  const n=arr1.length

  for (let i = 0; i < arr2.length; i++) {
      for (let j = 0; j < n; j++) {
          if (arr2[i] === arr1[j]) {
              result.push(arr1[j])
              arr1.splice(j, 1)
          }
      }
  }

  result.concat(arr1.sort((a, b) => a - b))

  return result

};