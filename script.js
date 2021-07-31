const  quizDB = [
    {
        question: "Q1: Which of the following option leads to the portability and security of Java?",
        a: "Bytecode is executed by JVM",
        b: "The applet makes the Java code secure and portable",
        c: "Use of exception handling",
        d: "Dynamic binding between objects",
        ans: "ans1"
    },
    {
        question: " Q2: Which of the following is not a Java features? ",
        a: "Dynamic",
        b: "Architecture Neutral",
        c: "Use of pointers",
        d: "Object-oriented",
        ans: "ans3"
    },

    {
        question: " Q3: The \u0021 article referred to as a ",
        a: "Unicode escape sequence",
        b: "Octal escape",
        c: "Hexadecimal",
        d: "Line feed",
        ans: "ans1"
    },{
        question: "Q4: _____ is used to find and fix bugs in the Java programs.",
        a: "JVM",
        b: "JRE",
        c: "JDK",
        d: "JDB",
        ans: "ans4"
    },
    {
        question: "Q5: What does the expression float a = 35 / 0 return?",
        a: "0",
        b: "NaN",
        c: "infinite",
        d: "Run time exception",
        ans: "ans3"
    },
    {
        question: "Q6: Which of the following is a valid long literal?",
        a: "ABH8097",
        b: "L990023",
        c: "904423",
        d: "0xnf029L",
        ans: "ans4"
    },
    {
        question: "Q7: What is the return type of the hashCode() method in the Object class?",
        a: "Object",
        b: "int",
        c: "long",
        d: "void",
        ans: "ans2"
    },
    {
        question: "Q8: Which of the following for loop declaration is not valid?",
        a: "for ( int i = 99; i >= 0; i / 9 )",
        b: "for ( int i = 7; i <= 77; i += 7 )",
        c: "for ( int i = 20; i >= 2; - -i ",
        d: "for ( int i = 2; i <= 20; i = 2* i )",
        ans: "ans3"
    },
    {
        question: "Q9: Which of the following is true about the anonymous inner class?",
        a: "It has only methods",
        b: "Objects can't be created",
        c: "It has a fixed class name",
        d: "It has no class name",
        ans: "ans4"
    }, {
        question: "Q10: Which package contains the Random class?",
        a: "java.util package",
        b: "java.lang package",
        c: "java.awt package",
        d: "java.io package",
        ans: "ans1"
    }
];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0


const loadQuestion = () => {
    
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;
    
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

const deselectAll = () => {
    answers.forEach(currCheckedAns => currCheckedAns.checked = false);
}


loadQuestion();

const getCheckAnswer = () => {

    let answer;

    answers.forEach(curAnsElem => {
        if(curAnsElem.checked) {
            answer = curAnsElem.id
        }
    })

    return answer;

}



submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;  
    }
   

    questionCount++;
    deselectAll();

    if(questionCount < quizDB.length) {
        loadQuestion();
       
    } else {
        showScore.innerHTML = `
            <h3> You scored ${score}/${quizDB.length}</h3>

            <button class="btn" onclick="location.reload()">Try Again</button>
        `;

        showScore.classList.remove('scoreArea');
    }
});


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};













