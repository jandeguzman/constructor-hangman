var inquirer = require('inquirer');

var wordsList = ["pizza" , "chips" , "nuggets" , "cereal"];

var blanksAndSuccesses = [];

var numGuesses = 9;

var wrongGuesses = [];

var letterGuessed = "";

var word = function (word) {
	this.word = word;
	this.lettersInChosenWord = word.split("")
	this.numBlanks = word.length;
	this.blanks = function () {
		for (var i = 0; i < this.numBlanks; i++) {
    	blanksAndSuccesses.push("_");
  		}
	}
	this.checkLetters = function(letter) {

  var letterInWord = false;

  for (var i = 0; i < this.numBlanks; i++) {

    if (this.lettersInChosenWord[i] === letter) {

      letterInWord = true;
    }
  }


  if (letterInWord) {


    for (var j = 0; j < this.numBlanks; j++) {


      if (this.lettersInChosenWord[j] === letter) {


        blanksAndSuccesses[j] = letter;
      }
    }

    console.log(blanksAndSuccesses);
  }

  else {

    wrongGuesses.push(letter);

    numGuesses--;

  }
  getLetter();

}
}

chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];

console.log(chosenWord);

var newWord = new word(chosenWord);
newWord.blanks();

console.log(blanksAndSuccesses);



var getLetter = function() {
 if (numGuesses > 0) { 
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your guess?",
      name: "guess"
    },
  ])
  .then(function(inquirerResponse) {
  		newWord.checkLetters(inquirerResponse.guess);
      console.log(wrongGuesses);
});
} else {
	console.log(numGuesses);
}
}
getLetter();