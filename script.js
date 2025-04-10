var videocon = document.getElementById("video-container");
var playBtn = document.getElementById("play");
//mouseenter and mouseleave events to show and hide the play button
// when the mouse enters and leaves the video container
videocon.addEventListener("mouseenter", function(){
    gsap.to(playBtn, {
      scale: 1,
      opacity: 1
    });
});
//mouseleave event to hide the play button when the mouse leaves the video container
videocon.addEventListener("mouseleave", function(){
    gsap.to(playBtn, {
      scale: 0,
      opacity: 0
    });
});

videocon.addEventListener("mousemove", function(dets){
  gsap.to(playBtn, {
    left:dets.x,
    top:dets.y
  });  
});