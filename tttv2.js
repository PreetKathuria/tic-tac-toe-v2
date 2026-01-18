alert("welcome, to tic tac toe Gam made by preet");

const strtbtn = document.querySelector(".strtbtn");
const boxcont = document.querySelector(".boxes");
const boxes = document.querySelectorAll(".box");
const winner = document.querySelector(".winner");
const button = document.querySelector(".button");
const reset = document.querySelector(".restart");
const home = document.querySelector(".home");

let written = true;

const winnerchance = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const hidding = () => {
        strtbtn.style.display = "none";
        boxcont.style.display = "flex";
        button.style.display = "flex";
};

strtbtn.addEventListener("click" , hidding);

boxes.forEach((box) => {
    box.addEventListener("click" , () =>{ 
        if(box.innerText === "") {
            if(written === true) {
                box.innerText = "O";
                written = false;
            }
            else {
                box.innerText = "X";
                written = true;
            }
            console.log("box is clicked");
            box.disabled = true;
            checkwinner();
        }
    });
});

const checkwinner = () => {
    for(let winner of winnerchance) {

        console.log(
            boxes[winner[0]].innerText,
            boxes[winner[1]].innerText,
            boxes[winner[2]].innerText
        )

        let chance1 = boxes[winner[0]].innerText;
        let chance2 = boxes[winner[1]].innerText;
        let chance3 = boxes[winner[2]].innerText;

        if(chance1 !== "" && chance2 !== "" && chance3 !== "") {
            if(chance1 === chance2 && chance2 === chance3){
                console.log("winner");
                disableAllBoxes();
                displaywinner(chance1);
                return;
                }
            }
        }
    };

const disableAllBoxes = () => {
    boxes.forEach((box) => (box.style.pointerEvents = "none"));
}

const displaywinner = (chance1) => {
    winner.innerText = `🥳${chance1}💥 Wins`;
    alert(`winner is ${chance1}`);
}

reset.addEventListener("click" , () => {
    enableAllBoxes();
    winner.innerText = "";
    written = true;
});

home.addEventListener("click" , () => {
    location.reload();
});

const enableAllBoxes = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.style.pointerEvents = "auto";
    });
};