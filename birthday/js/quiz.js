const questions=[

{

question:"When is my birthday?",

answers:[
"15 April",
"16 April",
"17 April",
"18 April"
],

correct:1

},

{

question:"Aku ngeselin ga?",

answers:[
"Tidak",
"Engga kok",
"Sama sekali engga",
"ORA"
],

correct:0

},

{

question:"Seberapa cinta kamu sama aku?",

answers:[
"100%",
"1000%",
"8",
"1000000000%"
],

correct:0

},

{

question:"Apa makanan kesukaan aku?",

answers:[
"Burger",
"Ayam",
"Makan apapun asal sama kamu",
"gatau"
],

correct:0

},

{

question:"Apa map kesukaan aku di roblox?",

answers:[
"Relapse",
"The mimic",
"Grow a garden",
"Fish it"
],

correct:3

}

];

const startBtn=document.getElementById("startBtn");

const startScreen=document.getElementById("startScreen");

const quizScreen=document.getElementById("quizScreen");

const finishScreen=document.getElementById("finishScreen");

const questionText=document.getElementById("questionText");

const answerContainer=document.getElementById("answerContainer");

const questionNumber=document.getElementById("questionNumber");

const progressBar=document.getElementById("progressBar");

const nextBtn=document.getElementById("nextBtn");

const giftBtn=document.getElementById("giftBtn");

let current=0;

startBtn.onclick=()=>{

startScreen.style.display="none";

quizScreen.style.display="block";

loadQuestion();

}

function loadQuestion(){

nextBtn.style.display="none";

const q=questions[current];

questionNumber.innerHTML=`Question ${current+1} / ${questions.length}`;

progressBar.style.width=((current+1)/questions.length*100)+"%";

questionText.innerHTML=q.question;

answerContainer.innerHTML="";

q.answers.forEach((text,index)=>{

const btn=document.createElement("button");

btn.className="answer";

btn.innerHTML=text;

btn.onclick=()=>selectAnswer(index,btn);

answerContainer.appendChild(btn);

});

}

function selectAnswer(index, button){

    const buttons = document.querySelectorAll(".answer");

    buttons.forEach(btn => {
        btn.disabled = true;
    });

    // Semua jawaban dianggap benar
    button.classList.add("correct");

    nextBtn.style.display = "inline-block";

}

nextBtn.onclick=()=>{

current++;

if(current<questions.length){

loadQuestion();

}else{

quizScreen.style.display="none";

finishScreen.style.display="block";

}

}

giftBtn.onclick=()=>{

giftBtn.innerHTML="Opening Gift... ❤️";

giftBtn.disabled=true;

setTimeout(()=>{

localStorage.setItem("quizCompleted","true");
window.location.href="index.html";

},1800);

}