gsap.from("#nav",{
    y:-50,
    duration:2,
    ease:Expo.easeInOut,
    opacity:0
})
gsap.from("#line1",{
    width:0,
    duration:2,
    ease:Expo.easeInOut,
    delay:2
})
gsap.from("#line2",{
    width:0,
    duration:2,
    ease:Expo.easeInOut,
    delay:2
})
gsap.from("#move>h1",{
    opacity:0,
    delay:4,
    duration:1
})
gsap.from("#others>h2",{
    scrollTrigger:{
        trigger: "#others>h2",
        start: "top 70%",
        end:"top 20%",
        // markers: true
    },
    duration:2,
    opacity:0
})
gsap.from("#others #btn",{
    scrollTrigger:{
        trigger: "#others>h2",
        start: "top 65%",
        end:"top 20%",
        // markers: true
    },
    duration:2,
    opacity:0
})
gsap.from(".slide",{
    scrollTrigger:{
        trigger: "#others>h2",
        start: "top 50%",
        // markers: true
    },
    duration:1,
    opacity:0,
})







var elem=document.querySelector("#move h1");
var img=document.querySelector("#image");


elem.addEventListener("mouseenter",function(){
    let i=elem.getAttribute("data-image");
    let w=elem.getAttribute("data-width");
    let h=elem.getAttribute("data-height");
    img.style.backgroundImage=`url(${i})`
    img.style.width=w;
    img.style.height=h;
})
document.addEventListener("mousemove", function(move){
    // console.log(move.x);
    img.style.left=`${move.x-250}px`;
    img.style.top=`${move.y-150}px`;

})




gsap.from("#ovone",{
    scrollTrigger:{
        trigger: "#ovone",
        start: "top 90%",
        end:"top 20%",
        // markers: true,
        scrub:true
    },
    width:"48vh",
    duration:1,
    // opacity:0
})


gsap.from("#ovtwo",{
    scrollTrigger:{
        trigger: "#ovtwo",
        start: "top 90%",
        end:"top 20%",
        // markers: true,
        scrub:true
    },
    width:"48vh",
    duration:.5,
    // opacity:0
})


function slideCircle(){
    document.querySelectorAll(".oval")
        .forEach(function(slide){
            slide.addEventListener("mousemove", function(dets){
                console.log("aaya");
                var dim = slide.getBoundingClientRect();
                console.log(dim);
                this.children[1].style.clipPath = `circle(25% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`;
            });

            slide.addEventListener("mouseleave", function(dets){
                console.log("gaya");
                var dim = slide.getBoundingClientRect();
                this.children[1].style.clipPath = `circle(0% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`;
            });
        })
}
slideCircle();



gsap.from("#section3 h1",{
    scrollTrigger:{
        trigger: "#section3 h1",
        start: "top 85%",
        end:"top 30%",
        // markers: true,
    },
    x:-300,
    ease:Expo.easeInOut,
    duration:2,
    opacity:0
})
gsap.from("#section3 #s3left>p",{
    scrollTrigger:{
        trigger: "#section3 #s3left>p",
        start: "top 85%",
        end:"top 30%",
        // markers: true,
    },
    x:-300,
    ease:Expo.easeInOut,
    duration:2,
    opacity:0
})
gsap.from("#section3 #play",{
    scrollTrigger:{
        trigger: "#section3 #play",
        start: "top 85%",
        end:"top 30%",
        // markers: true,
    },
    ease:Expo.easeInOut,
    duration:.5,
    opacity:0
})


gsap.from("#section3 #s3right .container",{
    scrollTrigger:{
        trigger: "#section3 #s3right .container",
        start: "top 85%",
        end:"top 30%",
        // markers: true,
    },
    x:300,
    // ease:Expo.easeInOut,
    duration:2,
    opacity:0,
    stagger:.5
})





gsap.from("#section4 .client",{
    scrollTrigger:{
        trigger: "#section4 .client",
        start: "top 90%",
        end:"top 65%",
        scrub:true,
        // markers: true,
    },
    x:300,
    // ease:Expo.easeInOut,
    duration:2,
    opacity:0,
    stagger:.5
})




gsap.from("#section6 h1",{
    scrollTrigger:{
        trigger: "#section6 h1",
        start: "top 90%",
        end:"top 65%",
        scrub:true,
        // markers: true,
    },
    x:-300,
    // ease:Expo.easeInOut,
    duration:2,
    opacity:0,
})

gsap.from("#section6 p",{
    scrollTrigger:{
        trigger: "#section6 p",
        start: "top 85%",
        end:"top 65%",
        scrub:true,
        // markers: true,
    },
    // x:-300,
    // ease:Expo.easeInOut,
    duration:2,
    opacity:0,
})

gsap.from("#section6 .dummy",{
    scrollTrigger:{
        trigger: "#section6 .dummy",
        start: "top 90%",
        end:"top 65%",
        scrub:true,
        // markers: true,
    },
    x:100,
    ease:Expo.easeInOut,
    duration:2,
    opacity:0,
    stagger:.5
})





gsap.from("#bigone",{
    scrollTrigger:{
        trigger: "#bigone",
        start: "top 85%",
        end:"top 30%",
        // markers: true,
        scrub:true
    },
    x:-800,
    duration:2,
    opacity:0
})

gsap.from("#bigtwo",{
    scrollTrigger:{
        trigger: "#bigtwo",
        start: "top 75%",
        end:"top 30%",
        // markers: true,
        scrub:true
    },
    // x:-800,
    delay:2,
    duration:2,
    opacity:0
})

gsap.from("#bigthree",{
    scrollTrigger:{
        trigger: "#bigthree",
        start: "top 85%",
        end:"top 30%",
        // markers: true,
        scrub:true
    },
    x:800,
    duration:2,
    opacity:0
})
