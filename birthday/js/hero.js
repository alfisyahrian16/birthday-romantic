
if(localStorage.getItem("heroUnlocked") !== "true"){
    window.location.href="intro.html";
}

const music = document.getElementById("bgMusic");

const overlay = document.getElementById("introOverlay");

const startBtn = document.getElementById("startExperience");

const website = document.getElementById("website");

startBtn.addEventListener("click", () => {

    overlay.classList.add("hide");

    website.classList.add("show");

    if (music) {

        music.volume = 0.45;

        music.play().catch(err => {

            console.log("Music Error:", err);

        });

    }

});

/* ==========================
   CURSOR GLOW
========================== */

const glow = document.querySelector(".cursorGlow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = (e.clientX - 125) + "px";
    glow.style.top = (e.clientY - 125) + "px";

});

/* ==========================
   HERO PARALLAX
========================== */

const photo = document.getElementById("photo");

document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 35;
    const y = (window.innerHeight / 2 - e.clientY) / 35;

    photo.style.transform = `translate(${x/2}px, ${y/2}px)`;

});



/* ==========================
   GALLERY LIGHTBOX
========================== */

const galleryImages = document.querySelectorAll(".memoryCard img");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightboxImage");
const lightboxCaption = document.querySelector(".lightboxCaption");
const closeLightbox = document.querySelector(".closeLightbox");

galleryImages.forEach((img)=>{

    img.addEventListener("click",()=>{

        lightbox.classList.add("active");

        lightboxImage.src = img.src;

        lightboxCaption.innerHTML = img.dataset.caption;

    });

});

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});

/* ==========================
   LOVE LETTER
========================== */

const envelopes = document.querySelectorAll(".envelope");

const letterModal = document.querySelector(".letterModal");
const paperTitle = document.querySelector(".paperTitle");
const paperContent = document.querySelector(".paperContent");
const closeLetter = document.querySelector(".closeLetter");

const letters = {

    1:{
        title:"The First Time ❤️",

        content:"I still remember the first time we met. I never imagined that someone could bring so much happiness into my life. Thank you for becoming the most beautiful part of my journey."
    },

    2:{
        title:"Thank You 🌸",

        content:"Thank you for staying beside me through every laugh, every challenge, and every ordinary day. Your presence makes every moment feel extraordinary."
    },

    3:{
        title:"My Wish 🎂",

        content:"On your special day, I wish you endless happiness, good health, and every dream you hope for. I promise to always support you and be by your side."
    },

    4:{
        title:"To My Favorite Person ❤️",

        content:"No matter how much time passes, my feelings for you will never change. Happy Birthday, my love. Thank you for making my world brighter every single day. I love you, always."
    }

};

envelopes.forEach((envelope)=>{

    envelope.addEventListener("click",()=>{

        const id = envelope.dataset.letter;

        paperTitle.textContent = letters[id].title;
        paperContent.textContent = letters[id].content;

        letterModal.classList.add("active");

    });

});

closeLetter.addEventListener("click",()=>{

    letterModal.classList.remove("active");

});

letterModal.addEventListener("click",(e)=>{

    if(e.target===letterModal){

        letterModal.classList.remove("active");

    }

});


/* ==========================
   BIRTHDAY SURPRISE
========================== */

const birthdaySurprise = document.getElementById("birthdaySurprise");

if (birthdaySurprise) {

    birthdaySurprise.addEventListener("click", () => {

        document.body.classList.add("pageFade");

        setTimeout(() => {

            const music = document.getElementById("bgMusic");

if(music){

    music.pause();

    music.currentTime = 0;

}

            window.location.href = "surprise.html";

        }, 700);

    });

}