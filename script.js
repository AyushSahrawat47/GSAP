gsap.to("#box1", {
    // x:1000,
    duration:2,
    delay:1.5,
    rotate:360,
    backgroundColor:"pink",
    borderRadius:"50%",
    scale:0.5,
    // repeat:-1,
    // yoyo:true
});

gsap.to("#box2",{
    duration:1.5,
    rotate:180,
    borderRadius:"10%",
    scale:0.5,
    scrollTrigger:{
        trigger:"#page2 #box2",
        scoller:"body",
        markers:true,
        // start:"top 60%",
        // end:"top30%",
        // scrub:2

    }
})




