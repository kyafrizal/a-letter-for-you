/* ============================= */
/* CHANGE PAGE */
/* ============================= */

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ============================= */
/* OPEN ENVELOPE */
/* ============================= */

function openLetter() {

    showPage("question");

}


/* ============================= */
/* NO BUTTON RUN AWAY */
/* ============================= */

function runAway() {

    const button = document.getElementById("noButton");

    const maxX = window.innerWidth / 2 - 120;
    const maxY = window.innerHeight / 2 - 80;

    const randomX =
        Math.floor(Math.random() * maxX * 2) - maxX;

    const randomY =
        Math.floor(Math.random() * maxY * 2) - maxY;

    button.style.position = "fixed";

    button.style.left =
        `calc(50% + ${randomX}px)`;

    button.style.top =
        `calc(50% + ${randomY}px)`;

    button.style.zIndex = "9999";
}


/* ============================= */
/* YES BUTTON */
/* ============================= */

function sayYes() {

    showPage("success");

    loadSavedMessage();

}


/* ============================= */
/* SAVE MESSAGE */
/* ============================= */

function saveMessage() {

    const message =
        document.getElementById("message").value.trim();

    const savedMessage =
        document.getElementById("savedMessage");


    if (message === "") {

        savedMessage.innerHTML =
            "♡ Tulis pesanmu terlebih dahulu ya...";

        return;
    }


    /* SAVE TO BROWSER */

    localStorage.setItem(
        "loveLetterMessage",
        message
    );


    savedMessage.innerHTML =
        "♡ Your words have been saved ♡\n\n" +
        "\"" + message + "\"";


    document.getElementById("message").value =
        message;
}


/* ============================= */
/* LOAD SAVED MESSAGE */
/* ============================= */

function loadSavedMessage() {

    const saved =
        localStorage.getItem("loveLetterMessage");

    if (saved) {

        document.getElementById("message").value =
            saved;

    }
}


/* ============================= */
/* LOAD WHEN WEBSITE OPENS */
/* ============================= */

window.addEventListener(
    "DOMContentLoaded",
    function () {

        loadSavedMessage();

    }
);
