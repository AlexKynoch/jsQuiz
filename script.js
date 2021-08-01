const questions = [["what color are bananas"],
["what color are green apples"],
["what color are strawberrys"],
["what color are oranges"],
["what color are tomatos"]];

const answers = [["yellow"],
["green"],
["red"],
["orange"],
["red"]];

let questionNo = 1;
let score = 0;

function checkAnswers() {
    if (document.getElementById("text-field").value == answers[0][0]) {
        //checks to see if answer input into the text field is the same as the value of the first element of the answers array - if so do the following.
        score++ //add one to the score 
        document.getElementById("text-field").value = ""; //clears the answer from the text field.


    }
}

function clickButton() {
    checkAnswers();
    questions.shift(); //removes first array block.
    answers.shift();
    questionNo++; // add one to the question number
    start(); // now [0][0] will be the second question

    //need to add loop as questions keep on counting even when run out of questions

}

function start() {

    if (questions.length != 0) {  //if there are questions left .

        document.getElementById("question").innerHTML = questions[0][0]; //got to the questions constant get the first element of the first inner array in the questions array and put result into the part of the html that has the id of question.


        document.getElementById("questionNumber").innerHTML = "Question " + questionNo; //in the html @ the id of questionNumber put the word Question and the value of the variable called questionNo (with a space in between).


    }
    else {
        document.getElementById("questionNumber").innerHTML = "The End!";  //if no questions left in questoins array change questionNumber message to "The End!".
        document.getElementById("question").innerHTML = "Your score is " + score;
        document.getElementById("text-field").remove(); //remove the text-field
        document.getElementById("button").remove(); // remove the button.
    }



}

