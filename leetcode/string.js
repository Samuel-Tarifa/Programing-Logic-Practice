var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const dict = {};

  for (let i = 0; i < s.length; i++) {
    if (!dict[s[i]]) dict[s[i]] = 1;
    else dict[s[i]]++;

    if (!dict[t[i]]) dict[t[i]] = -1;
    else dict[t[i]]--;
  }
  const result = new Set(Object.values(dict));
  return result.size === 1 && result.has(0);
};
console.log(isAnagram("anagram", "nagaram"));
