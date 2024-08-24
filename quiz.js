let data = [
    {
        Q: "Q 1: JS is used for?",
        a: "Frontend",
        b: "Animation",
        c: "Dynamically update Content",
        d: "Backend",
        ans: "ans3",
    },
    {
        Q: "Q 2: What does DOM stand for in JavaScript?",
        a: "Document Object Model",
        b: "Data Object Model",
        c: "Display Object Management",
        d: "Document Oriented Model",
        ans: "ans1"
    },
    {
        Q: "Q 3: Which method is used to convert JSON data to a JavaScript object?",
        a: "JSON.parse()",
        b: "JSON.stringify()",
        c: "JSON.object()",
        d: "JSON.convert()",
        ans: "ans1"
    },
    {
        Q: "Q 4: What keyword is used to declare a constant variable in JavaScript?",
        a: "var",
        b: "let",
        c: "const",
        d: "constant",
        ans: "ans3"
    },
    {
        Q: "Q 5: Which of the following is a JavaScript framework?",
        a: "Django",
        b: "React",
        c: "Laravel",
        d: "Ruby on Rails",
        ans: "ans2"
    },
    {
        Q: "Q 6: Which method is used to add an element to the end of an array?",
        a: "push()",
        b: "pop()",
        c: "shift()",
        d: "unshift()",
        ans: "ans1"
    },
    {
        Q: "Q 7: Which operator is used to compare both value and type in JavaScript?",
        a: "==",
        b: "===",
        c: "!=",
        d: "!==",
        ans: "ans2"
    },
    {
        Q: "Q 8: How do you create a function in JavaScript?",
        a: "function myFunction()",
        b: "def myFunction()",
        c: "create myFunction()",
        d: "func myFunction()",
        ans: "ans1"
    },
    {
       Q: "Q 9: Fullform of JS ?",
       a: "JavaScript",
       b: "JavaSience",
       c: "JavaS",
       d: "Javasecure",
       ans: "ans1"
    },
    {
        Q: "Q10: Which JavaScript method is used to find the length of a string?",
        a: "length()",
        b: "size()",
        c: "index()",
        d: "stringLength()",
        ans: "ans1"
    }
];

let question = document.getElementById("qns");
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let option4 = document.getElementById("opt4");
let answer = document.querySelectorAll(".options");
let num = 0;
let score = 0;

function loadQuestion() {
    let currentData = data[num];
    question.innerHTML = currentData.Q;
    option1.innerHTML = currentData.a;
    option2.innerHTML = currentData.b;
    option3.innerHTML = currentData.c;
    option4.innerHTML = currentData.d;

    // Clear previous answer status
    answer.forEach(input => {
        input.checked = false;
        input.nextElementSibling.classList.remove('correct', 'incorrect');
    });
}

function checkAnswer() {
    let selectedOption;
    answer.forEach(input => {
        if (input.checked) {
            selectedOption = input.id;
        }
    });
    return selectedOption;
}

function next() {
    let selectedAnswer = checkAnswer();

    if (selectedAnswer) {
        let correctOption = data[num].ans;

        // Highlight selected answer
        if (selectedAnswer === correctOption) {
            document.getElementById(selectedAnswer).nextElementSibling.classList.add('correct');
            score++;
        } else {
            document.getElementById(selectedAnswer).nextElementSibling.classList.add('incorrect');
            document.getElementById(correctOption).nextElementSibling.classList.add('correct');
        }

        num++;
        if (num >= data.length) {
            let emoji = '';
            if (score >= 8) {
                emoji = '😄'; // Happy emoji for score 8 or above
            } else if (score >= 7) {
                emoji = '😊'; // Normal emoji for score 7
            } else if (score >= 3) {
                emoji = '😐'; // Neutral emoji for score 3 or more
            } else {
                emoji = '😢'; // Sad emoji for score below 3
            }

            document.querySelector('.myScore').innerHTML = `Your score is ${score}/${data.length} ${emoji}`;
            document.querySelector('.btn').innerHTML += '<button onclick="reload()">Reload</button>';
        } else {
            loadQuestion();
        }
    } else {
        alert("Please select an option!");
    }
}

function prev() {
    if (num > 0) {
        num--;
        loadQuestion();
    } else {
        alert("No previous question!");
    }
}

function reload() {
    location.reload();
}

window.onload = loadQuestion;







