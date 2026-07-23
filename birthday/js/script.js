if(localStorage.getItem("quizCompleted") !== "true"){
    window.location.href = "quiz.html";
}

const loading = document.getElementById("loading");

const text = [
    "Loading...",
    "Preparing something special...",
    "Just for you ❤️",
    "Tapi",
    "Masukin password dulu ya, wleee"
];

let index = 0;

function showText() {

    if(index < text.length){

        loading.textContent = text[index];

        index++;

        setTimeout(showText,1800);

    }else{

       loading.style.display = "none";

localStorage.setItem("introUnlocked", "true");

window.location.href = "password.html";
    }

}

showText();
