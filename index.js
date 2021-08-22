var readlineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;
var userName = readlineSync.question("What is your name? ");

console.log(chalk.red("Welocme " + userName + " to the game !!"));

function play(question,answer){
  var userAnswer = readlineSync.question(question);
   if(userAnswer.toUpperCase() === answer.toUpperCase()){
     console.log(chalk.green("You got it right!"));
     score++;
   }
   else{
     console.log(chalk.red("You were wrong! "));
   }
   console.log("Your score is " + score);
   console.log("-------------------------------");
}

var arr = [
  {
    question:"Where do I work? ",
    answer:"Infosys"
  },
  {
    question:"Where do I live? ",
    answer:"Rayagada"
  },
  {
    question:"What do I like? ",
    answer: "chicken"
  },
  {
    question:"What genre do I like in movies? ",
    answer:"Sci-Fi"
  }];

var highScores = [
  {
    name:"sainath",
    score:3
  },
  {
    name:"akash",
    score:2
  }
];

for(var i=0;i<arr.length;i++){
  play(arr[i].question,arr[i].answer);
}

console.log("Your total score is: " + chalk.blue(score));

console.log("---------------------------------");
console.log("LEADERBOARD");
console.log("---------------------------------");

for(var i=0;i<highScores.length;i++){
  console.log(highScores[i].name + " " + highScores[i].score);
}

for(var i=0 ; i<highScores.length;i++){
  if(score > highScores[i].score){
    console.log("Yayyy ! You are a highscorer");
    break;
  }
}