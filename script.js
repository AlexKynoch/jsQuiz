const questions = [["what color are bananas", "yellow"],
["what color are green apples", "green"],
["what color are strawberrys", "red"],
["what color are oranges", "orange"],
["what color are tomatos", "red"]];

questionNo = 1;

function clickButton() {
    questions.shift(); //removes first array block.
    questionNo++; // add one to the question number
    start(); // now [0][0] will be the second question
}

function start() {



    document.getElementById("questionNumber").innerHTML = "Question " + questionNo; //in the html @ the id of questionNumber put the word Question and the value of the variable called questionNo (with a space in between).

    document.getElementById("question").innerHTML = questions[0][0]; //got to the questions constant get the first element of the first inner array in the questions array and put result into the part of the html that has the id of question.



}

