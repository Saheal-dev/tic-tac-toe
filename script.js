// we have 9 boxes
// there are two players
//player1 and player2 have alternate X & O
//winning patterns --->>
// 0,1,2
// 3,4,5
// 6,7,8
// 0,3,6
// 1,4,7
// 2,5,8
// 0,4,8
// 2,4,6

let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgameBtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

let turn = true; //playerx and playerY

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

//reset game button
const resetGame = () => {
  turn = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

//to enter the value of x and o in to the box
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn == true) {
      box.innerText = "X";
      turn = false;
    } else {
      box.innerText = "O";
      turn = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

//disable all the ohter boxes after result
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

// enable boxes
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

//show the winner function
const showWinner = (winner) => {
  msg.innerText = `Congratulations ,Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

//check winner  function to check the winner
checkWinner = () => {
  for (let pattern of winpattern) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner", pos1val);

        showWinner(pos1val);
      }
    }
   
  }
};

newgameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
