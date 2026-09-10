/* ===============================
   PINDAH HALAMAN
================================ */

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

}


/* ===============================
   BUKA AMPLOP
================================ */

function openLetter() {

    showPage("question");

}


/* ===============================
   TOMBOL NO KABUR
================================ */

function runAway() {

    const button = document.getElementById("noButton");

    const maxX = window.innerWidth * 0.30;
    const maxY = window.innerHeight * 0.25;

    const randomX =
        Math.floor(Math.random() * (maxX * 2)) - maxX;

    const randomY =
        Math.floor(Math.random() * (maxY * 2)) - maxY;

    button.style.position = "relative";

    button.style.left = randomX + "px";

    button.style.top = randomY + "px";

}


/* ===============================
   YES
================================ */

function sayYes() {

    showPage("success");

}


/* ===============================
   SIMPAN PESAN
================================ */

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


    result.innerHTML =
        `
        ♡ Your words have been saved ♡
        <br><br>
        <i>"${escapeHTML(message)}"</i>
        `;

}


/* ===============================
   MENCEGAH HTML DI PESAN
================================ */

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}
