function tala() {
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#bg"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#bg", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#bg").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
tala()




const elems = document.querySelectorAll(".elems");
const imageDiv = document.querySelector("#image");
const arrow = document.querySelectorAll(".fruits i");
const Fruits = document.querySelectorAll(".fruits");

elems.forEach(function (elem) {

    elem.addEventListener("mouseenter", function () {
        let img = elem.getAttribute("data-image");
        let w = elem.getAttribute("data-width");
        let h = elem.getAttribute("data-height");
        imageDiv.style.backgroundImage = `url(${img})`;
        imageDiv.style.width = w;
        imageDiv.style.height = h;
        
    })

    // this code is using for mouse moving over the div
    document.addEventListener("mousemove", function (dets) {
        imageDiv.style.left = `${dets.x-150}px`
        imageDiv.style.top = `${dets.y - 150}px`
    })  
})







gsap.from("#page1 #part1, #page1 #part2 #part2l, #page1 #part2 #part2r", {
    y: 100,
    opacity: 0,
    duration: 2,
    delay: 1,

    ease:Expo.easeInOut,
    stagger: {
        amount:1
    }
})
gsap.from("#page2 #p2card ", {
    scrollTrigger: {
        trigger:"#p2card",
        star: "top 30% ",
        end:"top 40%",
        scrub: 2,
        // markers: true, 
        scroller:"#bg   "      
    },
    y: 100,
    duration: 1,
    width:"80%",
    
})
gsap.from("#page3>h1", {
    scrollTrigger: {
        trigger: "#page3>h1",
        // markers: true,
        start: "top 80%",
        end:"top 40%",
        
        scrub:2,
        scroller:"#bg"
        
    },
    y: 100,
    opacity: 0,
    duration:0.1,
    ease: Expo.easeInOut,
    
})
gsap.from("#page4 .divider", {
    scrollTrigger: {
        trigger: "#page4 .divider",
        // markers: true,
        start:"top 100%",
        scrub:2,   
        scroller:"#bg   "    
    },
    x: 50,
    width: "0%",
    opacity: 0,
    duration:0.1,
})

gsap.from("#page4 #box-1 .star", {
    scrollTrigger: {
        trigger: "#page4 #box-1 .star ",
        // markers: true,
        start:"top 90%",
        scrub:2,   
        scroller:"#bg   "    
    },
    top: "100%",
    opacity: 0,
    duration: 0.1,
    ease: Expo.easeInOut,
})

gsap.from("#page4 .elems", {
     scrollTrigger: {
        trigger: "#page4 .elems",
        // markers: true,
        start: "top 90%",
        // end: "top 50%",
        scrub:2,   
        scroller:"#bg"    
    },
    top: "150%",
    stagger: 2,
    duration: 2,
    ease: Expo.easeInOut,
      opacity: 0,
})
gsap.from("#page5 #p5top h1", {
      scrollTrigger: {
        trigger: "#page5 #p5top h1",
        // markers: true,
        start: "top 70%",
        end: "top 50%",
        scrub:2,  
        scroller:"#bg   "     
    },
    y: 60,
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut,
})
gsap.from("#page5 .divider", {
    scrollTrigger: {
        trigger: "#page5 .divider",
        // markers: true,
        start:"top 100%",
        scrub:2, 
        scroller:"#bg   "      
    },
    x: 50,
    width: "0%",
    opacity: 0,
    duration: 0.1,
    
})
gsap.from("#page5 #p5btm #p5btml h1, #page5 #p5btm #p5btmr h3", {
      scrollTrigger: {
        trigger: "#page5 #p5btm #p5btml h1, #page5 #p5btm #p5btmr h3",
        // markers: true,
        start: "top 90%",
        end: "top 100%",
        scrub:2, 
        scroller:"#bg   "      
    },
    y: 60,
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
    
})
gsap.from("#page6 #text-content h1, #page6 h5, #text-container #smiley",{
    scrollTrigger: {
        trigger: "#page6 #text-content h1, #page6 h5, #text-container #smiley",
        start: "top 60%",
        end:"top 80%",
        // markers: true,
        scrub:5,
        scroller:"#bg   "
    },
    y: 20,
    opacity: 0,
     duration: 3,
    ease: Expo.easeInOut,
    stagger: {
        amount: 1
    }
})
gsap.from("#page7 h1, #page7 h1 span", {
    scrollTrigger: {
        trigger: "#page7",
        start: "top 30%",
        end:"top 70%",
        // markers: true,
        scrub:2,
        scroller:"#bg   "
    },
    y: 50,
    opacity: 0,
    duration:.5,

    stagger: {
        amount: .5
    }
})
gsap.to("#page8 .text1 h1", {
    scrollTrigger: {
        trigger: "#page8 .text1 h1",
        start:"top 50%",
        scrub: 2,
        scroller:"#bg   "
        // markers:true,
    },
    x: 0,
    duration: 2,
    transfrom:"translateX(0%)",
    // ease: Expo.easeInOut,
    
})
gsap.to("#page8 .text2 h1", {
    scrollTrigger: {
        trigger: "#page8 .text2 h1",
        // markers: true,
        scrub:2,
        scroller:"#bg   "
    },
    x:0,
    duration:2,
    transfrom:"translateX(100%)",
    // ease: Expo.easeInOut,
    
})
gsap.from("#page9 #header-container h1, #lower-container h3", {
    scrollTrigger: {
        trigger: "#page9 #header-container h1, #lower-container h3",
        start: "top 60%",
        // end:"top 60%",
        // markers: true,
       scrub:2,
       scroller:"#bg    "
    },
    y: 50,
    opacity: 0,
    // duration:1,
    stagger: .2,
    ease: Expo.easeInOut,
    
})
gsap.from("#page10 h1", {
    scrollTrigger: {
        trigger: "#page10 h1",
        start: "top 80%",  
      scrub:2,
      scroller:"#bg "
    },
    y: 50,
    opacity: 0,

})
gsap.from("#page11 .small-img-container img", {
    scrollTrigger: {
        trigger: "#page11 .small-img-container img",
        start: "top 100%",
        end: "top 10%",
        scrub:2,
        scroller:"#bg   "
    },
    y: 50,
    opacity: 0,
    stagger: 1,
    duration: 1.5,
    
})
gsap.from("#page12 #p12top h1", {
    scrollTrigger: {
        trigger: "#page12 #p12top h1",
        start: "top 80%",
        scrub:2,
        scroller:"#bg   "
    },
    y: 100,
    opacity: 0,
    ease: "linear",
    stagger: 1,
})


//menu
var bar = document.querySelector("#menu-bar");
var rotate = document.querySelector("#rotate");
var menuCover = document.querySelector("#menu-cover");
var l1 = document.querySelector(".line1");
var l2 = document.querySelector(".line2");
var cart = document.querySelector("#rnav h4 a");

var flag = 0;

bar.addEventListener("click", function (e) {
    if (flag === 0) {
        document.querySelector("#nav-bar").style.filter = " invert(0%) sepia(00%) saturate(6481%) hue-rotate(246deg) brightness(0%) contrast(143%)";
        menuCover.style.top = "0%";
        flag = 1;
        l1.style.transform ='rotate(45deg) translate(25%,0%)'
        l2.style.transform = 'rotate(-45deg) translate(10%,0%)'
         l1.style.transition = "0.9s ease"
        l2.style.transition = "0.9s ease"
        l2.style.width = "100%";
        gsap.to("#rnav h4 a", {
            color: '#c9bcbe;'
        }),
       gsap.to("#menu-bar", {
    transform: 'rotate(90deg)',
    delay:0.1
})
       
    }
    else{
        document.querySelector("#nav-bar").style.filter = "brightness(2) sepia(1) hue-rotate(-70deg) saturate(5)";
        menuCover.style.top = "-100%";        
        l1.style.transform ='rotate(0deg) translate(0%,0%)'
        l2.style.transform = 'rotate(0deg) translate(0%,0%)'
         l1.style.transition = "0.9s ease"
        l2.style.transition = "0.9s ease"
        l2.style.width="50%";
        flag = 0;
      gsap.to("#menu-bar", {
    transform: 'rotate(0deg)',
})

    }
})

// gsap.to("#menu-bar", {
//     transform: 'rotate(90deg)',
//     delay:4
// })