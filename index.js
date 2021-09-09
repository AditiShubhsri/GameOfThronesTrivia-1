var readlineSync = require("readline-sync");
var chalk = require("chalk");

var userName = readlineSync.question("What's your name?");
console.log("Hello ", userName,"! Welcome to Game of Thrones Trivia Quiz");
console.log("Let's begin!")
var score = 0


var levelOne = [
  {
    q : "Which character said:'When you play the game of thrones, you win or you die'? ",
    a : "Cersie Lannister",

  },

  {
    q : "Where is the real-life King's Landing located? ",
    a : "Dubronvik, Croatia",

  },

  {
    q : "Which character is associated with the abbreviation 'R+L=J'? ",
    a : "Jon Snow",

  },

  {
    q : "How long does the wall stretch out for? ",
    a : "300 miles",

  },

  {
    q : "Before which battle did Sansa Stark say:'You're going to die tomorrow, Lord Bolton.Sleep well'?",
    a : "Battle of Bastards",

  },


]

var levelTwo = [

  {
    q : "Which character said:'Of all the ways to kill you, poison would be the last'? ",
    a : "Mance Rayder",

  },

  {
    q : "What is the language of the White Walkers ",
    a : "Skroth",

  },

  {
    q : "What is the name of the witch who predicts young Cersie Lannister's future? ",
    a : "Maggy",

  },

  {
    q : "The official motto 'Our blades are sharp' belongs to which house? ",
    a : "House Bolton",

  },

  {
    q : "Which cast member has won the most awards for their role in 'Game of Thrones'?",
    a : "Peter Dinklage",

  },
]

var levelThree=[
  {
    q : "Which city does George R.R Martin lives in? ",
    a : "Santa Fe, New Mexico",

  },

  {
    q : "What is the name of the civil war fought between rival branches of House Targaryen? ",
    a : "Dance of the Dragons",

  },

  {
    q : "How many daughters did Oberyn Martell have? ",
    a : "Three",

  },

  {
    q : "Who is responsible for the creation of the Night King? ",
    a : "The Children of the Forest",

  },

  {
    q : "Where is the house of Black and White? ",
    a : "Braavos",

  },
]

function one(questions,answer){
  var userAnswer = readlineSync.question(questions)
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Right!")
    score = score + 1


  }
  else{
    console.log("Wrong :(")
  }
  console.log("Current Score is ",score)
  console.log("------------")
}

function two(questions,answer){
  var userAnswer = readlineSync.question(questions)
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Right!")
    score = score + 1
    

  }
  else{
    console.log("Wrong :(")
  }
  console.log("Current Score is ",score)
  console.log("------------")
}



function three(questions,answer){
  var userAnswer = readlineSync.question(questions)
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Right!")
    score = score + 1
    

  }
  else{
    console.log("Wrong :(")
  }
  console.log("Current Score is ",score)
  console.log("------------")
}

for(var i =0;i<levelOne.length;i++){
  one(levelOne[i].q,levelOne[i].a)


}
if(score == 5)
{console.log("Welcome to level two!")
  for(var j = 0; j<levelTwo.length;j++)
  {
    two(levelTwo[j].q,levelTwo[j].a)
  }
}

if(score == 10){
  console.log("Welcome to level three!")
   for(var k = 0; k<levelThree.length;k++)
  {
    two(levelThree[k].q,levelThree[k].a)
}
}

console.log("Your final score is ",score);
console.log("Do play Again!")
