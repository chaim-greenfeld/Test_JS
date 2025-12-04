import input from "analiza-sync";

import func from "./utils/function.js";
// import func from "./utils/riddels.js";

console.log('Welcome to game :')
const name = input('What is your name?')
console.log(`Hello ${name}`)
const player1 = func.createPlayer(name)
func.askRiddle()