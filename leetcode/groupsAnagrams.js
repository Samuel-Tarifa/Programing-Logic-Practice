var groupAnagrams = function (strs) {
  const stringKeys = [];

  for (let i = 0; i < strs.length; i++) {
    let letters = new Array(26).fill(0);
    const word = strs[i];
    for (let j = 0; j < word.length; j++) {
      dict[word[j]] = (+word[j] || 0) + 1;
    }
    stringKeys.push(letters);
  }

  let result = [];

  for (let i = 0; i < stringKeys; i++) {}

  return stringKeys;
};

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
