import input from "analiza-sync";

const player1 = [];

function createPlayer(name = input("enter your name: ")) {
  const player = { name: name, times: [] };
  player1.push(player);
  return player;
}


let a = createPlayer("haim");
console.log(player1);



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


function showStats(name = input('enter a name player:  ')){

}