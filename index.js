var chalk= require("chalk");
function log(data){
 console.log((data));
}


var readlineSync= require("readline-sync");
 


var questionsL0=[{ques:"Which planet is called the Red Planet? ", answer:"Mars" },
{ques:" What pigment is present in all green plants that give them their color?", answer:"Chlorophyll"},
{ques:"How many squares of alternating colors are there on a chessboard?", answer:"64"},
{ques:"What is the science of color called?", answer:"Chromatics"},
{ques:"Which reptile has the ability to change its color?", answer:"Chameleon"},
{ques:"Which color has the highest wavelength in the spectrum?", answer:"Red"},
{ques:"What is the fear of colors called?", answer:"Chromophobia"},
{ques:"What color is used in the logo of the popular kid's channel Nickelodeon?", answer:"orange"},
{ques:"Name the scientist who explained the occurrence of the rainbow.", answer:"Isaac Newton"},
{ques:"What would you call an image that has one color?", answer:"Monochrome"}];

var questionsL1=[{ques:"Which component in human blood produces its red color? ", answer:"Haemoglobin" },
{ques:" Which plant provides the primary component of inks for colored newspaper?", answer:"Soybean"},
{ques:" What element is responsible for the red color of Mars?", answer:"Iron"},
{ques:"What is the most commonly occurring color of human eyes?", answer:"Brown"},
{ques:"Which city is called the Pink City?", answer:"Jaipur"},
{ques:"Which cells of the human eye are sensitive to colors?", answer:"Cones"},
{ques:"Shortform for seven colors present in the rainbow.", answer:"VIBGYOR"},
{ques:" How many points do you get for a green ball in snooker?", answer:"3"},
{ques:"Jaundice is a condition that causes the eye and skin into which colour?", answer:"Yellow"},
{ques:"How many colours are there on the logo of Microsoft Corporation?", answer:"4"}];

var username= readlineSync.question(chalk.blue("Hey! What's your name? "));
log(chalk.black.bold.italic.bgYellowBright.bold("Welcome "+username));
if( readlineSync.keyInYN(chalk.blue("do you want to play? "))){
  log(chalk.green.italic("Let's Start"));
   score=0;
  for(i=0; i<questionsL0.length;i++){
  play(questionsL0[i].ques,questionsL0[i].answer);
  }
  highestScore(score,8);
  if(score>6){
    if(readlineSync.keyInYN(chalk.black.italic.bgYellow("Congrats for clearing level0. Do you want to Unlock Level1?  "))){
     score=0;
      for(i=0;i<questionsL1.length;i++){
  play(questionsL1[i].ques,questionsL1[i].answer);}
      highestScore(score, 6);
     
   }
   else{
     log(chalk.yellow("ThankYou for playing level0, bye bye"));}
     }
  }  
else{
  log(chalk.yellow("Thankyou!byebye "));}
  var score=0;

function play(ques, answer){
  var userans = readlineSync.question(chalk.blue(ques));
  if ( userans.toLowerCase()===answer.toLowerCase() ){
  log(chalk.green.italic.bold("right answer"));
  score++;
  }
  else{
  log(chalk.red.italic.bold("wrong answer"));}
}

function highestScore( score,highest){
   log(chalk.red.bold("Your Score is: "+score));
   if(score > highest){
   log(chalk.black.bgYellow.italic.bold("Congrats! You have crossed the highest score"));}
}



