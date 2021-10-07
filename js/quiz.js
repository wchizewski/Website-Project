// Frog Website Project by Will

// variables to store html elements
let answer1InEl = document.getElementById("question1")
let answer2InEl = document.getElementById("question2")
let answer3InEl = document.getElementById("question3")
let answer4InEl = document.getElementById("question4")
let answer5InEl = document.getElementById("question5")

// Event listeners
document.getElementById("resultBtn").addEventListener("click", showResults)
document.getElementById("redoBtn").addEventListener("click", redo)

// Function
function showResults(){
    // case insensitive
    let ans1 = answer1InEl.value.toLowerCase();
    // check input
    if (ans1 === "7,300" || ans1 === "7300" || ans1 === "7 300"){
        
    }
}
