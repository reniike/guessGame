let number = document.querySelector("#number");
let secondHeading = document.querySelector("#secondHeading");
let guessButton = document.querySelector("#button");
let restartGameButton = document.querySelector("#restartGameButton")
let mainContainer = document.querySelector(".mainContainer")
let madeBy = document.querySelector("#madeBy")

let luckyNumber = Math.floor((Math.random() * 10) + 1)

function printClickingMessage(){
    if(number.value == luckyNumber){
        secondHeading.innerHTML = "Congratulations!, you got the number right"
    }else if(number.value > luckyNumber) {
        secondHeading.innerHTML = "Sorry, number is too high! "
    } else if(number.value < luckyNumber){
        secondHeading.innerHTML = "Sorry, number is too low! "
    }
} 

function restartGame(){
    location.reload();
}
guessButton.addEventListener("click", printClickingMessage)
restartGameButton.addEventListener("click", restartGame)
mainContainer.style.backgroundColor = "rgb(20,20,20)";
mainContainer.style.color = "rgb(0,161,146)";
madeBy.style.color = "rgb(253,232,189)"
guessButton.style.color = "rgb(0,161,146)"
