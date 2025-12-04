import input from "analiza-sync";

const riddle3 = function () {
  const r1 = {
    id: 1,
    name: "Easy Math",
    taskDescription: input("What is 5 * 3?     "),
    correctAnswer: "15",
  };
  if (r1.correctAnswer === r1.taskDescription) {
    console.log("you win");
    return ""
  } else {
    console.log("you loss");
    return riddle3();
  }
};
let a = riddle3;


export { riddle3 };
