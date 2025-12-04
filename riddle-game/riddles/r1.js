import input from "analiza-sync";

const riddle1 = function () {
  const r1 = {
    id: 1,
    name: "Easy Math",
    taskDescription: input("What is 5 + 3?     "),
    correctAnswer: "8",
  };
  if (r1.correctAnswer === r1.taskDescription) {
    console.log("you win");
  
  } else {
    console.log("you loss");
    return riddle1();
  }
return r1;
};
let a = riddle1;

export { riddle1 };
