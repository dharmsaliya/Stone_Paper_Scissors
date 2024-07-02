let choices = ["stone","paper","scissors"];
let userscore = 0;
let computerscore = 0;

let userchoice = document.querySelectorAll("img");

let ComputerChoice = () => {
    let index = Math.floor(Math.random() * 3);
    let computerchoice = choices[index];

    return computerchoice;
}

let winner = (user,computer) => {
    if(user === computer){return "tie"}
    else if(user === "stone" && computer === "paper"){return "computer"}
    else if(user === "stone" && computer === "scissors"){return "user"}
    else if(user === "paper" && computer === "stone"){return "user"}
    else if(user === "paper" && computer === "scissors"){return "computer"}
    else if(user === "scissors" && computer === "stone"){return "computer"}
    else if(user === "scissors" && computer === "paper"){return "user"}
}

let result = (userchoice, computerchoice) => {
    const answer = document.querySelector(".winorlose");
    let win = winner(userchoice,computerchoice);
    let output;
    if(win === "user"){
        output = "WIN";
        userscore += 1;
        answer.style.color = 'green';
    }
    else if(win === "computer"){
        output = "LOSE";
        computerscore += 1;
        answer.style.color = 'red';
    }
    else{
        output = "TIE";
        answer.style.color = '#FDFFE2'
    }

    
    document.getElementById("yourchoice").innerHTML = userchoice;
    document.getElementById("computerchoice").innerHTML = computerchoice;
    document.querySelector(".winorlose").innerHTML = output;
    document.querySelector("#scoreyou").innerHTML = userscore;
    document.querySelector("#scorecomputer").innerHTML = computerscore;


}

userchoice.forEach(choice => {
    choice.addEventListener("click", () => {
        let userPick = choice.id;
        let computerPick = ComputerChoice();
        result(userPick,computerPick);
    });
});







