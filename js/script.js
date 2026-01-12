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


// bookings  =======================================

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