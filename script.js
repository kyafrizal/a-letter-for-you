/* =========================
   PAGE SYSTEM
========================= */

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {
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
   NO BUTTON RUNS AWAY
========================= */

function runAway() {

    const button = document.getElementById("noButton");

    const parent = button.parentElement;

    const parentWidth = parent.clientWidth;
    const parentHeight = parent.clientHeight;

    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;


    let randomX =
        Math.random() *
        (parentWidth - buttonWidth);


    let randomY =
        Math.random() *
        (parentHeight - buttonHeight);


    /* jangan terlalu dekat dengan YES */

    randomX = Math.max(5, randomX);
    randomY = Math.max(5, randomY);


    button.style.position = "absolute";

    button.style.left = randomX + "px";

    button.style.top = randomY + "px";

}


/* =========================
   YES
========================= */

function sayYes() {

    showPage("success");

    loadSavedMessage();

}


/* =========================
   SAVE MESSAGE
========================= */

function sendMessage() {

    const message =
        document.getElementById("message").value.trim();


    const result =
        document.getElementById("result");


    if (message === "") {

        result.innerHTML =
            "♡ Tulis sesuatu terlebih dahulu...";

        return;

    }


    /* SIMPAN PESAN DI BROWSER */

    localStorage.setItem(
        "myLetterMessage",
        message
    );


    result.innerHTML =
        `
        ♡ Your words have been saved ♡
        <br><br>
        <i>"${escapeHTML(message)}"</i>
        `;

}


/* =========================
   LOAD SAVED MESSAGE
========================= */

function loadSavedMessage() {

    const savedMessage =
        localStorage.getItem("myLetterMessage");


    if (!savedMessage) {
        return;
    }


    document.getElementById("message").value =
        savedMessage;


    document.getElementById("result").innerHTML =
        `
        ♡ Your words are still here ♡
        <br><br>
        <i>"${escapeHTML(savedMessage)}"</i>
        `;

}


/* =========================
   SECURITY
========================= */

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


/* =========================
   LOAD MESSAGE WHEN PAGE OPENS
========================= */

window.addEventListener("load", function() {

    loadSavedMessage();

});
