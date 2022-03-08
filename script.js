var userInput = document.querySelector('.calculator .user_input');
var expression = '';

function press(num){
    expression += num;
    userInput.value = expression;
}

function equal(){
    expression = eval(expression);
    userInput.value = expression;
    expression = '';
}

function erase(){
    expression = '';
    userInput.value = expression;
}