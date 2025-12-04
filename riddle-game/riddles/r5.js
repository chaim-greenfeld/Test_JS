import input from "analiza-sync";

const riddle5 = function () {
  const r1 = {
    id: 1,
    name: "Easy Math",
    taskDescription: input("What is 51 / 3?     "),
    correctAnswer: "17",
  };
  if (r1.correctAnswer === r1.taskDescription) {
    console.log("you win");
    return ""
  } else {
    console.log("you loss");
    return riddle5();
  }
};
let a = riddle5;


export { riddle5 };
