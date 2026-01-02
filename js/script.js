// Bokningsbekräftelse =====================================

const form = document.querySelector(".bokning-action form");
const modul = document.querySelector("#booking-modul");
const closeBtn = document.querySelector("#close-modul");

// När man trycker på boka knapp

form.addEventListener("submit", function (e){
    e.preventDefault();
    modul.classList.remove("hidden");
});

// När man klickar på "stäng"-knappen

closeBtn.addEventListener("click", function (){
    modul.classList.add("hidden");
})

// ==========================================================