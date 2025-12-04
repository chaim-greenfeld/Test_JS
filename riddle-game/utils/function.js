import input from "analiza-sync";
import riddles from "./riddels.js";
import { riddle1 } from "../riddles/r1.js";
const player1 = [];

function createPlayer(name = input("enter your name: ")) {
  const player = { name: name, times: [] };
  player1.push(player);
  return player;
}

function addSolveTime(
  name = input("enter a name of player: "),
  number = input("enter seconds: ")
) {
  for (let i = 0; i < player1.length; i++) {
    if (name === player1[i].name) {
      player1[i].times.push(number);
      return player1[i];
    }
  }

  return "The player not Exists ";
}

function showStats(name = input("enter a name player:  ")) {
  let time = 0;
  let allTimes;

  for (let i = 0; i < player1.length; i++) {
    if (name === player1[i].name) {
      allTimes = player1[i].times;

      for (let i = 0; i < allTimes.length; i++) {
        time += allTimes[i];
      }
      return `The all seconds: ${time} The average to ask: ${time / allTimes.length}`;
    }
  }
  return "The player not Exists ";
}


function askRiddle(name){

  let a = riddles.riddle1()
  while (a.correctAnswer !== a.correctAnswer){
    riddles.riddle1()
  }
}

function measureSolveTime(fn){

}




export default {createPlayer, addSolveTime, showStats, askRiddle}






































































