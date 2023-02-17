const quizData = [
    {
        question: "Achten Sie bitte ... die Treppe!",
        a: "an",
        b: "auf",
        c: "zu",
        correct: "b",
    },
    {
        question: "Wie komme ich ... Bahnhof?",
        a: "auf",
        b: "an",
        c: "zum",
        correct: "c",
    },
    {
        question: "Er hat mich ... der Richtigkeit seiner Ideen überzeugt.",
        a: "von",
        b: "aus",
        c: "mit",
        correct: "a",
    },
    {
        question: "Ich verstehe nur Bahnhof!",
        a: "Ich verstehe alles",
        b: "Ich verstehe wenig",
        c: "Ich verstehe nichts",
        correct: "c",
    },
    {
        question: "Alles Autos werden vom TÜV ...",
        a: "repariert",
        b: "lackiert",
        c: "geprüft",
        correct: "c",
    }
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Sie haben ${score}/${quizData.length} richtig beantwortet</h2>
           <button onclick="location.reload()">Neu anfangen</button>
           `
       }
    }
})

