const questions = [{

      'ques': 'Which of the following is a markup language?',
      'a': 'HTML',
      'b': 'CSS',
      'c': 'JAVA SCRIPT',
      'd': 'PHP',
      'correct':'a'
},
{
    'ques': 'What year Java Script was launched?',
      'a': '1996',
      'b': '1995',
      'c': '1994',
      'd': 'None of the above',
      'correct':'b'
},

{
 'ques': 'What does CSS stands for?',
      'a': 'Cascading Style Sheet',
      'b': 'Hyper Text Markup',
      'c': 'Object Oriented Programing',
      'd': 'Jason Object Notation',
      'correct':'a'
}
]
let index = 0;
let total = questions.length;
let right = 0,
wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");
const loadQuestion = () =>
{
    if(index === total)
    {
        return endQuiz();
    }
    reset();
    const data = questions[index]
    console.log(data)
    quesBox.innerText = `${index+1}) ${data.ques}`;   //doubtt?????
   
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}
const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if(ans === data.correct)
    {
        right ++;
    } else {
        wrong ++;
    }
    index++;
    loadQuestion();
    return;

}

const getAnswer = () => {
    let answer;
    optionInputs.forEach((input) => {
        if(input.checked) 
        {
          answer = input.value;
        }
            
    }
)
return answer;
}

const reset = () =>{
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center; background-color: green;">
    <h3> Thank you for playing </h3>
    <h2> ${right} / ${total} are Correct </h2>
    </div>
    `
}
    

loadQuestion();