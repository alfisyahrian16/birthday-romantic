if(localStorage.getItem("passwordVerified") !== "true"){
    window.location.href="password.html";
}

const text = document.getElementById("text");

const scenes = [

"Udah siap belooooooooom?",

"Jalan jalaaaan....",

"Dengan sepatu rodaku",

"Becanda wkwk",

"OK, Mode serius nih",

"Sometimes...",

"Life gives us unexpected surprises.",

"I never thought...",

"Someone could change my world.",

"Until...",

"I met you ❤️",

"Since then...",

"Every day has become",

"a beautiful memory.",

"We've laughed.",

"We've cried.",

"We've grown together.",

"And today...",

"is your special day.",

"Happy Birthday ❤️"

];

let i = 0;

function nextScene(){

    if(i >= scenes.length){


document.body.classList.add("fadeOut");

setTimeout(()=>{

    localStorage.setItem("heroUnlocked","true");

    window.location.href="hero.html";

},900);


        return;

    }

    text.style.opacity = 0;

    setTimeout(()=>{

        text.innerHTML = scenes[i];

        text.style.opacity = 1;

        i++;

    },800);

    setTimeout(nextScene,3200);

}

nextScene();