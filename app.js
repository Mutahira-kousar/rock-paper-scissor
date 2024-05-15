let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");




// function if game draw
const drawGame = () =>{
    msg.innerText = "Game was draw.Play again!";
    msg.style.backgroundColor = "#081b31";
}



// function to show winner

const showWinner = (userWin, userChoice, CompChoice) =>{
    if(userWin){
        userScore++;
        userscorePara.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compscorePara.innerText = compScore;
        msg.innerText = `You Win! ${CompChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

};

const genCompChoice = () =>{
    const options = ["rock" , "paper" , "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}



const playGame = (userChoice) =>{
    
    // Generate computer choice
    const CompChoice = genCompChoice();
   

    if(userChoice === CompChoice){
        // game draw
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor, paper
            userWin = CompChoice === "paper" ? false :true;
        }else if(userChoice === "paper"){
            // rock, scissor
            userWin = CompChoice === "scissor" ? false :true;
        } else{
            //rock, paper
            userWin = CompChoice === "rock" ? false :true;
        }
        showWinner(userWin, userChoice , CompChoice);
    }

}





choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
       // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
})