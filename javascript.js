//mouse cursor code in js

// var crsr = document.querySelector("#cursor")
// var blur = document.querySelector("#cursor-blur")
// document.addEventListener("mousemove",function(dets){
//   crsr.style.left = dets.x + "px"
//   crsr.style.top = dets.y + "px"
//   blur.style.left = dets.x - 75 + "px"
//   blur.style.top = dets.y - 75 + "px"
// })

//cursor-blur in js

// var blur = document.querySelector("#cursor-blur")
// document.addEventListener("mousemove",function(dets){
//   blur.style.left = dets.x + "px"
//   blur.style.top = dets.y + "px"
// })


//navbar code in js
// var h4all = document.querySelectorAll("#nav h4")
// h4all.forEach(function(elem){
//   elem.addEventListener("mouseenter",function(){

//   })
// })

gsap.to("#nav", {
  backgroundColor: " rgb(85, 40, 85)",
  duration: 0.1,
  opacity: -3,
  height: "75px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    markers: true,
    start: "top  -10%",
    end: "top -11%",
    scrub: 1,
  }
})
//  main code in js
gsap.to("#main", {
  backgroundColor: " rgb(72, 0, 75)",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    markers: true,
    start: "top  -25%",
    end: "top -80%",
    scrub: 2
  }
})
//  scroll all element

gsap.from("#about-us img, #about-us-in", {
  y: 50,
  opacity: -3,
  duration: 2,
  // stagger: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 50%",
    scrub: 2
  }
})
//         .card scroll


gsap.from(".card", {
  y: 50,
  opacity: -3,
  duration: 2,
  stagger: 1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top 90%",
    scrub: 2
  }
})
gsap.from("#page3 h1",{
  y:50,
  opacity: -3,
  scrollTrigger:{
    trigger:"#page3 h1",
    scroller:"body",
    start:"top 70%",
    markers:true,
    end:"top 70%",
    scrub:3
  }
})
// gsap.from(".card",{
//   scale:1,
//   opacity:0,
//   duration:1,
//   scrolltrigger:{
//     trigger:".card",
//     markers:true,
//     start:"top 60%",
//     end : "top 50%",
//     scrud:2,
//   }
// })