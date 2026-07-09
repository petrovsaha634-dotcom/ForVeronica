// =============================
// Кнопка "Начать нашу историю"
// =============================

const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {
document.getElementById("timeline").scrollIntoView({
behavior: "smooth"
});
});

// =============================
// Плавное появление карточек
// =============================

const cards = document.querySelectorAll(".card");

const cardObserver = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {
entry.target.classList.add("show");
}

});

}, {
threshold: 0.3
});

cards.forEach(card => {
cardObserver.observe(card);
});

// =============================
// Кнопка "Наверх"
// =============================

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {

if (window.scrollY > 500) {
backTop.style.display = "block";
} else {
backTop.style.display = "none";
}

});

backTop.addEventListener("click", () => {

window.scrollTo({
top: 0,
behavior: "smooth"
});

});


// ============================
// Просмотр фотографий
// ============================

const photos = document.querySelectorAll(".photo img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");

photos.forEach(photo=>{

photo.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImage.src=photo.src;

});

});

closeLightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});
// ======================
// Таймер до встречи
// ======================

const targetDate = new Date("2026-08-30 00:00:00");

function updateCountdown(){

    const now = new Date();

    const diff = targetDate - now;

    if(diff <= 0){
        return;
    }

    const days =
        Math.floor(diff / (1000*60*60*24));

    const hours =
        Math.floor((diff/(1000*60*60))%24);

    const minutes =
        Math.floor((diff/(1000*60))%60);

    document.getElementById("days").textContent =
        days;

    document.getElementById("hours").textContent =
        hours;

    document.getElementById("minutes").textContent =
        minutes;
}

updateCountdown();

setInterval(updateCountdown,1000);

const song =
    document.getElementById("song");

const musicButton =
    document.getElementById("musicButton");

musicButton.addEventListener("click",()=>{

    if(song.paused){

        song.play();

        musicButton.textContent =
            "⏸️ Пауза";

    }else{

        song.pause();

        musicButton.textContent =
            "🎵 Включить нашу песню";

    }

});