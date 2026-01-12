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

const bookings = document.querySelectorAll(".booking");

if (bookings.length > 0){
    bookings.forEach((booking)=>{
        const toggleBtn = booking.querySelector(".toggle-info");
        const moreInfo = booking.querySelector(".more-info");

        if(toggleBtn && moreInfo) {
            toggleBtn.addEventListener("click", ()=>{
                moreInfo.classList.toggle("open");
            })
        }
        
    });
}