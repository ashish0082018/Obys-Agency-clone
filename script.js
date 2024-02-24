// Writing all codes just inside the function so that it will be easier to undersatand and code appears neat and clean
function loadingAnimation(){
//We make timeline , that is which code runs first and so on . OR automatically the sequence of animation runs 


var tl=gsap.timeline();
tl.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5
});

tl.from("#line1-part1, .line h2",{
    opacity:0,

    // Timer of Loader page, i.e 0 -100 value , initially shown
    onStart:function(){                                   // it is the onStart function which can use to store other function
    var h5timer=document.querySelector("#line1-part1 h5");
    var count=0;
    setInterval(function(){                       
         if(count<100){
             h5timer.innerHTML=count++;          // value of h5timer stops after 100
         }
        else{
        h5timer.innerHTML=count;
            }
},35);                         
    }
});
tl.to('.line h2',{
    animationName:"anime",
    opacity:1
})
tl.to("#loader",{
    
    opacity:0,
    duration:0.4,
    delay:2
});

tl.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    duration:0.5,
    ease:Power4

})
tl.to("#loader",{
    display:"none"
})
tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    stagger:0.2,
    y:120
})
}
loadingAnimation()   // just calling the function 


// Writing all codes of cursur,i.e magnetic effect
function cursorAnimation(){

    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
           left:dets.x,
           top:dets.y
        })
       })
       // we appply this magnet effect from sheryjs 
       Shery.makeMagnet("#nav-part2 h4");
}
cursorAnimation()