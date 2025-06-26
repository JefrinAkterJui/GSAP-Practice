// gsap.from('h1',{
//     opacity:0,
//     duration:1,
//     y:30,
//     delay:1,
//     stagger:0.5
// }) -- text animation

// gsap.to(".box1",{
//     x:1100,
//     duration:2,
//     delay:1,
//     rotate:360,
//     borderRadius:"50%",
//     repeat:-1,
//     yoyo:true
// })

// -----------------using timeline
// gsap.to('.box1',{
//     x:1100,
//     duration:1.5,
//     delay:1,
//     rotate:360
// })
// gsap.to('.box2',{
//     x:1100,
//     duration:1.5,
//     delay:2.5,
//     rotate:360,
//     borderRadius:'30%'
// })
// gsap.to('.box3',{
//     x:1100,
//     duration:1.5,
//     delay:4,
//     rotate:360,
//     borderRadius:'50%'
// })

var tl = gsap.timeline()
tl.to('.box1',{
    x:1100,
    duration:1.5,
    delay:1,
    rotate:360
})
tl.to('.box2',{
    x:1100,
    duration:1.5,
    rotate:360,
    borderRadius:'30%'

})
tl.to('.box3',{
    x:1100,
    duration:1.5,
    rotate:360,
    borderRadius:'50%'

})