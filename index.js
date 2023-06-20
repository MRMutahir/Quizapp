let objQue = [

    {
        id: 1,
        que: ' Que1 Javascript is an _______ language?',
        a: 'Objesct-Oriented',
        b: 'Object-Based',
        c: 'Procedural',
        d: 'None of the above',
        corect: 'Objesct-Oriented'
    },
    {
        id: 2, que: ' Que2 Which of the following keywords is used to define a variable in Javascript?',
        a: 'var',
        b: 'let',
        c: 'Both a & b ',
        d: 'None of the aboves',
        corect: 'Both a & b '
    },
    {
        id: 3, que: ' Que3 Which of the following methods is used to access HTML elements using Javascript?',
        a: 'getElementsbyId',
        b: 'getElementsByClassname()',
        c: 'Both a & b ',
        d: 'None of the aboves',
        corect: 'Both a & b '
    },


    {
        id: 4,
        que: ' Que4 Upon encountering empty statements, what does the Javascript Interpreter do?',
        a: 'Throws an error',
        b: 'Ignores the statments',
        c: 'Gives a warning ',
        d: 'None of the aboves',
        corect: 'Ignores the statments'
    },
    {
        id: 5,
        que: ' Que5 Which HTML tag is used to define an internal style sheet?',
        a: '<css>',
        b: '<style>',
        c: '<script>',
        correct: 'b',
    },
    {
        id: 6,
        que: 'Which property is used to change the background color?',
        a: 'color',
        b: 'background-color',
        c: 'bgcolor',
        correct: 'b'
    },
    {
        id: 7,
        que: ' Que7 What is the correct syntax for referring to an external script called "xxx.js"?',
        a: '<script href="xxx.js">',
        b: 'script name ="xxx.js">',
        c: 'script src ="xxx.js">',
        correct: 'c',
    },
    {
        id: 8,
        que: ' Que8 How do you write "Hello World" in an alert box?',
        a: 'msg("Hello World")',
        b: 'alert("Hello World")',
        c: 'alertbox("Hello World")',
        correct: 'b',
    },
    {
        id: 9,
        que: ' Que9 How do you create a function in JavaScript?',
        a: 'function myFunction()',
        b: 'function = myFunction()',
        c: 'fuction:myFunction()',
        correct: 'a',
    },
    {
        id: 10,
        que: ' Que10 How to write an IF statement in JavaScript?',
        a: 'if i == 5 then',
        b: 'if (i == 5)',
        c: 'if i=5',
        correct: 'b'
    }
];
let questions = document.getElementById('questions');
let answer = document.querySelectorAll('#answer');
let next = document.getElementById('next');
let a_1 = document.querySelector('.a');
let b_2 = document.querySelector('.b');
let c_3 = document.querySelector('.c');
let d_4 = document.querySelector('.d');
// console.log(questions);
// console.log(answer);
// console.log(next);
console.log(a_1, b_2, c_3, d_4);
// console.log(random)
let a1 = 0

function nextQue() {
    let currentQuizQue = objQue[a1];
    questions.innerHTML = currentQuizQue.que;
    a_1.textContent = 'hi'
    //    b_2.innerHTML = currentQuizQue.b ;
    //    c_3.innerHTML = currentQuizQue.c ;
    //    d_4.innerHTML = currentQuizQue.d ;
}
