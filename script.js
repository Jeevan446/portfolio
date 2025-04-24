let tl = gsap.timeline();
if (window.innerWidth > 600) {
  tl.from("li", {
    // delay:0.1,
    y: -10,
    opacity: 0,
    stagger: 0.4,
  });
}
else{
    tl.from(".menu",{
        opacity:0,
        duration:0.3
    })
}
tl.from(".pentagon", {
  opacity: 0,
  x: 50,
  duration: 0.9,
  ease: "power0.1.out",
});

tl.from("h1", {
  x: -10,
  duration: 0.5,
  opacity: 0,
});
tl.from("h2", {
  duration: 0.7,
  opacity: 0,
  ease: "power0.1.out",
});
tl.from("h3", {
  duration: 0.7,
  opacity: 0,
  ease: "power0.1.out",
});
tl.from("button", {
  x: 20,
  scale: 0,
  duration: 0.7,
});

let tl2=gsap.timeline();
tl2.to(".menu",{
  opacity:0,
  duration:0.2
})
tl2.to(".slider",{
  x:"0%",
  duration:.6
})
tl2.from(".slider ul li",{
  opacity:0,
  x:10,
  stagger:0.2
})
tl2.from(".cross",{
opacity:0,
duration:0.5
})
tl2.pause();
document.querySelector(".menu").addEventListener("click",()=>{
  tl2.play();
})
document.querySelector(".cross").addEventListener("click",()=>{
  tl2.reverse();
})