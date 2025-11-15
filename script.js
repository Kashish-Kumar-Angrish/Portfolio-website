let menuBtn = document.getElementById("menubtn");
let crossBtn = document.getElementById("cross");


let tl = gsap.timeline();

tl.to("#navBar",{
    right: 0,
    duration: 0.8
})

tl.from("#navBar a",{
    x: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3
})

tl.from("#navBar i",{
    opacity: 0
})

tl.pause();


menuBtn.addEventListener("click", function(){
    tl.resume();
})

crossBtn.addEventListener("click", function(){
    tl.reverse();
})