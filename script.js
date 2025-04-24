let tl=gsap.timeline();
if(window.innerWidth>600){
    tl.from("li",{
        // delay:0.1,
        y:-10,
        opacity:0,
        stagger:0.4
    })

}

tl.from(".pentagon",{
    opacity:0,
    x:50,
    duration:.9,
    ease: "power0.1.out",
})

tl.from("h1",{
    x:-10,
    duration:0.5,
    opacity:0
})
tl.from("h2",{
    duration:0.7,
    opacity:0,
    ease: "power0.1.out",
})
tl.from("h3",{
    duration:0.7,
    opacity:0,
    ease: "power0.1.out",
})
tl.from("button",{
    x:20,
    scale:0,
    duration:0.7
})


