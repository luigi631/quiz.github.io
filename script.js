// Questions that will be asked
const Questions = [{
    q: "Who was the Fourth Hokage?",
    a: [{ text: "Iruka Umino", isCorrect: false },
    { text: "Minato Namikaze", isCorrect: true },
    { text: "Jiraiya", isCorrect: false },
    { text: "Tsunade senju", isCorrect: false }
    ]
 
},
{
    q: "Who is the curse occupying Yuji Itadori's in Jujutsu Kaisen?",
    a: [{ text: "Jogo", isCorrect: false, isSelected: false },
    { text: "Gojo Saturu", isCorrect: false },
    { text: "Mahito", isCorrect: false },
    { text: "Ryomen Sukuna", isCorrect: true }
    ]
 
},
{
    q: "How many episodes does Death Note have overall",
    a: [{ text: "40 Episodes", isCorrect: false },
    { text: "25 Episodes", isCorrect: false },
    { text: "37 Episodes", isCorrect: true },
    { text: "50 Episodes", isCorrect: false }
    ]
 
}


]
 
let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}