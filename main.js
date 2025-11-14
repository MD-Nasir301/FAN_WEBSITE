let fanStart = gsap.to(".fan", {
  rotation: 36100,
  duration: 10,
  repeat: -1,
  ease: "none",
});
gsap.to(".logo-bg", {
  yoyo: true,
  duration: 3,
  backgroundColor: "yellow",
  repeat: -1,
  ease: "none",
});
gsap.to(".logo-bg", {
  duration: 10,
  repeat: -1,
  ease: "none",
  rotation: 360,
});
gsap.to(".gd-b", {
  duration: 1,
  "--deg": "360deg",
  rotation: 360,
  repeat: -1,
  yoyo: false,
  ease: "none",
});
gsap.to(".child-div", {
  duration: 1,
  "--deg": "360deg",
  rotation: -360,
  repeat: -1,
  yoyo: false,
  ease: "none",
});

fanStart.pause();

let suiweOff = document.querySelector(".offbtn");
let suiweOn = document.querySelector(".onbtn");

document.querySelector(".onbtn").addEventListener("click", () => {
  fanStart.resume();
  suiweOff.style.zIndex = "15";
});

document.querySelector(".offbtn").addEventListener("click", () => {
  fanStart.pause();
  suiweOff.style.zIndex = "0";
});
