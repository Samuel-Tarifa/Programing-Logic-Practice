var topKFrequent = function (nums, k) {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = (hashMap[nums[i]] || 0) + 1;
  }
  const sorted = Object.entries(hashMap).sort((a, b) => b[1] - a[1]);
  const result = sorted.map((item) => item[0]);
  return result.slice(0, k);
};

console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));
