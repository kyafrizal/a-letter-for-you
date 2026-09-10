/* =========================
   PAGE SYSTEM
========================= */

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(function(page) {

        page.classList.remove("active");

    });

    document.getElementById(pageId).classList.add("active");

}


/* =========================
   OPEN ENVELOPE
========================= */

function openLetter() {

    showPage("question");

}


/* =========================
   NO BUTTON
========================= */

const noButton = document.getElementById("noButton");


function runAway() {

    const button = document.getElementById("noButton");

    /*
       Tombol akan berpindah secara acak.
       Jadi ketika cursor mendekat,
       tombol langsung kabur.
    */

    const maxX = Math.min(
        window.innerWidth / 2 - 100,
        250
    );

    const maxY = 180;

    const randomX =
        Math.floor(Math.random() * (maxX * 2 + 1))
        - maxX;

    const randomY =
        Math.floor(Math.random() * (maxY * 2 + 1))
        - maxY;

    button.style.position = "relative";

    button.style.left =
        randomX + "px";

    button.style.top =
        randomY + "px";

}


/* =========================
   YES BUTTON
========================= */

function sayYes() {

    showPage("success");

}


/* =========================
   SAVE MY WORDS
========================= */

function showLove() {

    const savedMessage =
        document.getElementById("savedMessage");

    savedMessage.innerHTML =
        "♡ Your words have been saved forever ♡";

}


/* =========================
   EXTRA HEART EFFECT
========================= */

document.addEventListener(
    "click",
    function(event) {

        const heart =
            document.createElement("span");

        heart.innerHTML = "♥";

        heart.style.position = "fixed";

        heart.style.left =
            event.clientX + "px";

        heart.style.top =
            event.clientY + "px";

        heart.style.color = "#ef6c91";

        heart.style.fontSize = "25px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "9999";

        heart.style.animation =
            "clickHeart 1s forwards";

        document.body.appendChild(heart);

        setTimeout(function() {

            heart.remove();

        }, 1000);

    }
);


/* =========================
   CLICK HEART ANIMATION
========================= */

const style =
    document.createElement("style");

style.innerHTML = `

@keyframes clickHeart {

    0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 1;
    }

    50% {
        transform: translate(-50%, -100px) scale(1.2);
        opacity: 1;
    }

    100% {
        transform: translate(-50%, -160px) scale(0.5);
        opacity: 0;
    }

}

`;

document.head.appendChild(style);
