const scroll = new LocomotiveScroll({
    el: document.querySelector('#main1'),
    smooth: true
});


var tl = gsap.timeline()

tl.to("#main1",{
    y:"100vh" ,
    duration:0.2,
    scale: 0.4
})


tl.to("#main1",{
    y:"vh" ,
    duration:1,
    Delay: 0
})


tl.to("#main1",{
   rotate: 18000,
   scale:1,
   duration: 3
})


