import input from "analiza-sync";

const riddle4 = function () {
  const r1 = {
    id: 1,
    name: "Easy Math",
    taskDescription: input("What is 10 / 2?     "),
    correctAnswer: "5",
  };
  if (r1.correctAnswer === r1.taskDescription) {
    console.log("you win");
    return ""
  } else {
    console.log("you loss");
    return riddle4();
  }
};
let a = riddle4;


export { riddle4 };
