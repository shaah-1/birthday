/* ---------- Countdown ---------- */
(() => {

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secsEl = document.getElementById("seconds");
const labelEl = document.getElementById("countdownLabel");
const countdown = document.getElementById("countdown");

function pad(n){
    return String(n).padStart(2,"0");
}

function tick(){

    const now = new Date();

    const year = now.getFullYear();

    const birthday = new Date(year,7,9,0,0,0);
    const birthdayEnd = new Date(year,7,10,0,0,0);

    if(now >= birthday && now < birthdayEnd){

        labelEl.innerHTML="🎉 Happy Birthday, Hila mol!";
        countdown.classList.add("arrived");

        daysEl.textContent="00";
        hoursEl.textContent="00";
        minsEl.textContent="00";
        secsEl.textContent="00";

        return;
    }

    let target=birthday;

    if(now>birthdayEnd){
        target=new Date(year+1,7,9,0,0,0);
    }

    const diff=target-now;

    const total=Math.floor(diff/1000);

    daysEl.textContent=pad(Math.floor(total/86400));
    hoursEl.textContent=pad(Math.floor(total%86400/3600));
    minsEl.textContent=pad(Math.floor(total%3600/60));
    secsEl.textContent=pad(total%60);

}

tick();
setInterval(tick,1000);

})();


/* ---------- Floating Petals ---------- */

(() => {

const container=document.getElementById("petals");

const icons=["✿","❀","♡"];

if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

for(let i=0;i<14;i++){

    const petal=document.createElement("span");

    petal.className="petal";
    petal.textContent=icons[Math.floor(Math.random()*icons.length)];

    petal.style.left=Math.random()*100+"vw";
    petal.style.fontSize=(1+Math.random())+"rem";
    petal.style.animationDuration=(8+Math.random()*8)+"s";
    petal.style.animationDelay=Math.random()*8+"s";

    container.appendChild(petal);

}

})();


/* ---------- Reveal Animation ---------- */

(() => {

const frames=document.querySelectorAll(".frame");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{
threshold:0.2
});

frames.forEach(frame=>observer.observe(frame));

})();


/* ---------- Lightbox ---------- */

(() => {

const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightbox-img");
const close=document.querySelector(".close");

document.querySelectorAll(".frame img").forEach(img=>{

img.style.cursor="zoom-in";

img.addEventListener("click",()=>{

lightbox.classList.add("show");

lightboxImg.src=img.src;

});

});

close.addEventListener("click",()=>{

lightbox.classList.remove("show");

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("show");

}

});

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

lightbox.classList.remove("show");

}

});

})();
