let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.herosection',
        start: "center",
        toggleActions: "restart none none none",
        stagger: 0.2 
    }
});

tl.from(".about__cont", {y: 300, opacity: 0, duration: 1})
tl.from(".feature__one", {y: 300, opacity: 0, duration: 1})


