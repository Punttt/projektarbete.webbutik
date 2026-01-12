// Bokningsbekräftelse =====================================

const form = document.querySelector(".bokning-action form");
const modul = document.querySelector("#booking-modul");
const closeBtn = document.querySelector("#close-modul");

// När man trycker på boka knapp
if(form && modul && closeBtn){
    form.addEventListener("submit", function (e){
        e.preventDefault();
        modul.classList.remove("hidden");
    });

    // När man klickar på "stäng"-knappen

    closeBtn.addEventListener("click", function (){
        modul.classList.add("hidden");
    })
}

// Återkommanderesa =====================================

const recurrentCheckbox = document.querySelector("#tripType3");

if(recurrentCheckbox){
    const recurrentOption = document.querySelector(".recurrent-options");

    recurrentCheckbox.addEventListener("change", ()=>{
        recurrentOption.classList.toggle("hidden");
    })
}


// Contact bekräftelse =======================================

const contactForm = document.querySelector(".kontakt form");
const messageConf = document.querySelector(".message-confirmation");

if(contactForm){
    contactForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        messageConf.classList.remove("hidden");
    }
    )
}


// bookings  mer-information ===============================

// Hämtar alla bokningar på sidan
const bookings = document.querySelectorAll(".booking");

// kontrollera att det finns bokningar på sidan
if (bookings.length > 0){
    //loopar igenom varje bokning
    bookings.forEach((booking)=>{
        //hämtar knappen och info rutan
        const toggleBtn = booking.querySelector(".toggle-info");
        const moreInfo = booking.querySelector(".more-info");

        // kör bara kod om båd elementen finns
        if(toggleBtn && moreInfo) {

            // togglar inforutan vid klick
            toggleBtn.addEventListener("click", ()=>{
                moreInfo.classList.toggle("open");
            })
        }
        
    });
}

// bookings  avboka/ändra tid ===============================

// hämtar modul för bekräftelse avboka och ändra tid
const cancelModul = document.querySelector(".cancel-modul");
const changeModul = document.querySelector(".change-modul");

// kontrollera att det finns bokningar på sidan
if(bookings.length > 0){
    bookings.forEach((booking)=>{
        //hämtar knappar för avboka/ändra tid
        const changeBtn = booking.querySelector(".btn-primary");
        const cancelBtn = booking.querySelector(".btn-secondary");

        // kör kod om knapp finns
        if(changeBtn){
            changeBtn.addEventListener("click", ()=>{
                changeModul.classList.remove("hidden");
            })
        }

        //kör kod om knapp finns
        if(cancelBtn){
            cancelBtn.addEventListener("click", ()=>{
                cancelModul.classList.remove("hidden");
            })
        }
    })
}

// hämtar knappar i modulen för att stänga
const closeModuls = document.querySelectorAll(".close-modul");

// stänga moduler vid klick
closeModuls.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        cancelModul.classList.add("hidden");
        changeModul.classList.add("hidden");
    })
})