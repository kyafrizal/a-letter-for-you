/* =================================
   PINDAH HALAMAN
================================= */

function showPage(pageId) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });


    document
        .getElementById(pageId)
        .classList.add("active");
}


/* =================================
   BUKA SURAT
================================= */

function openLetter() {

    showPage("question");

}


/* =================================
   TOMBOL NO KABUR
================================= */

function runAway() {

    const button =
        document.getElementById("noButton");


    /*
       Semakin sering disentuh,
       tombol semakin suka kabur.
    */

    const randomX =
        Math.floor(
            Math.random() * 300
        ) - 150;


    const randomY =
        Math.floor(
            Math.random() * 160
        ) - 80;


    button.style.left =
        randomX + "px";


    button.style.top =
        randomY + "px";
}


/* =================================
   YES
================================= */

function sayYes() {

    showPage("success");

}


/* =================================
   SIMPAN PESAN
================================= */

function sendMessage() {

    const message =
        document
            .getElementById("message")
            .value
            .trim();


    const result =
        document
            .getElementById("result");


    if (message === "") {

        result.innerHTML =
            "♡ Tulis sesuatu terlebih dahulu...";

        return;
    }


    result.innerHTML =
        "♡ Your words have been saved ♡<br>" +
        "<i>\"" +
        message +
        "\"</i>";
}