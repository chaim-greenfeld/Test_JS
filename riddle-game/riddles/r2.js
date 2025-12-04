import input from "analiza-sync";

const riddle1 = function () {
  const r1 = {
    id: 1,
    name: "Easy Math",
    taskDescription: input("What is 5 + 12?:       "),
    correctAnswer: "17",
  };
  return r1;
};
const a = riddle1();
if (a.correctAnswer === a.taskDescription) {
  console.log("you win");
} else {
  console.log("you loss");
}
