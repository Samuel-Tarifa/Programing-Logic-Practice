const dictionary = ["cat", "bat", "rat"];
let sentence = "the cattle";

var replaceWords = function (dictionary, sentence) {
  let array = sentence.split(" ");
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < dictionary.length; j++) {
      console.log(sentence[i].slice(0,dictionary[j].length))
      if (sentence[i].slice(0, dictionary[j].length) === dictionary[j]) {
        sentence[i] = dictionary[j];
      }
    }
  }
  return sentence;
};
console.log(dictionary[0].length)
// console.log(replaceWords(dictionary,sentence))