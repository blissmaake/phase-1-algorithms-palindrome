function isPalindrome(word) {
  // Write your algorithm here
  const arrayOfLetters = word.split('');
  const reverseLetters = arrayOfLetters.reverse()
  const reverseString  = reverseLetters.join('')

  if (word == reverseString){

    return true

  } else {
    return false
  }


}


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  So the isPalindrome function needs to take a word and see if it's the same front and back
   I've created a function that going to take the word and parse each 
  letter in it ,then it will be put it in condition 
  the condition will return true if it isPalindrome and  if not it 
  will return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
