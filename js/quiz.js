// Frog Website Project by Will

// variables to store html elements
let answer1InEl = document.getElementById("question1");
let answer2InEl = document.getElementById("question2");
let answer3InEl = document.getElementById("question3");
let answer4InEl = document.getElementById("question4");
let answer5InEl = document.getElementById("question5");
let feedback1 = document.getElementById("feedback1");
let feedback2 = document.getElementById("feedback2");
let feedback3 = document.getElementById("feedback3");
let feedback4 = document.getElementById("feedback4");
let feedback5 = document.getElementById("feedback5");
let percentage = document.getElementById("percentage");
let passOrFail = document.getElementById("passorfail");
let ques1score = 0;
let ques2score = 0;
let ques3score = 0;
let ques4score = 0;
let ques5score = 0;


// Event listeners
document.getElementById("resultBtn").addEventListener("click", showResults)

// Function
function showResults() {
    // case insensitive
    let ans1 = answer1InEl.value.toLowerCase();
    let ans2 = answer2InEl.value.toLowerCase();
    let ans3 = answer3InEl.value.toLowerCase();
    let ans4 = answer4InEl.value.toLowerCase();
    let ans5 = answer5InEl.value.toLowerCase();
    // question 1
    if (ans1 === "7,300" || ans1 === "7300" || ans1 === "7 300") {
        feedback1.innerHTML = " Correct!"
        feedback1.style.color = "green"
        answer1InEl.style.border = "3px solid green"
        ques1score = 1
    } else {
        feedback1.innerHTML = " Incorrect"
        feedback1.style.color = "red"
        answer1InEl.style.border = "3px solid red"
        ques1score = 0
    }
    // question 2
    if (ans2 === "goliath frog" || ans2 === "the goliath frog" || ans2 === "goliath frogs") {
        feedback2.innerHTML = " Correct!"
        feedback2.style.color = "green"
        answer2InEl.style.border = "3px solid green"
        ques2score = 1
    } else {
        feedback2.innerHTML = " Incorrect"
        feedback2.style.color = "red"
        answer2InEl.style.border = "3px solid red"
        ques2score = 0
    }
    // question 3
    if (ans3 === "tadpole" || ans3 === "tadpoles") {
        feedback3.innerHTML = " Correct!"
        feedback3.style.color = "green"
        answer3InEl.style.border = "3px solid green"
        ques3score = 1;
    } else {
        feedback3.innerHTML = " Incorrect"
        feedback3.style.color = "red"
        answer3InEl.style.border = "3px solid red"
        ques3score = 0
    }
    // question 4
    if (ans4 === "10" || ans4 === "ten") {
        feedback4.innerHTML = " Correct!"
        feedback4.style.color = "green"
        answer4InEl.style.border = "3px solid green"
        ques4score = 1;
    } else {
        feedback4.innerHTML = " Incorrect"
        feedback4.style.color = "red"
        answer4InEl.style.border = "3px solid red"
        ques4score = 0
    }
    // question 5
    if (ans5 === "lake titicaca" || ans5 === "titicaca") {
        feedback5.innerHTML = " Correct!"
        feedback5.style.color = "green"
        answer5InEl.style.border = "3px solid green"
        ques5score = 1;
    } else {
        feedback5.innerHTML = " Incorrect"
        feedback5.style.color = "red"
        answer5InEl.style.border = "3px solid red"
        ques5score = 0
    }
    // percentage/feedback
    let quizScore = ques1score + ques2score + ques3score + ques4score + ques5score
    percentage.innerHTML = quizScore + "/5 = " + quizScore / 5 * 100 + "%"
    if (quizScore >= 3) {
        passOrFail.innerHTML = "You Passed!"
        passOrFail.style.color = "green"
        percentage.style.color = "green"
    } else {
        passOrFail.innerHTML = "You failed, try again..."
        passOrFail.style.color = "red"
        percentage.style.color = "red"
    }
}