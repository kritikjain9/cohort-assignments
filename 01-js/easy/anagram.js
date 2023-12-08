/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  a1 = a.split('').sort();
  b1 = b.split('').sort();

  for(let i = 0; i < a1.length; i++){
    if(a1[i] !== b1[i]){
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
