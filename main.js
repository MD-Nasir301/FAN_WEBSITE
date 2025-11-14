let fanStart = gsap.to(".fan", {
  rotation: 331000,
  duration: 125,
  repeat: -1,
  ease: "none",
});
gsap.to(".logo-bg", {
  yoyo: true,
  duration: 3,
  backgroundColor: "#4bb1fff8",
  repeat: -1,
  ease: "none",
});
gsap.to(".logo-bg", {
  duration: 8,
  repeat: -1,
  ease: "none",
  rotation: 360,
});

fanStart.pause();

let buttonOff = document.querySelector(".offbtn");
let bg = document.querySelector(".bg");

document.querySelector(".onbtn").addEventListener("click", () => {
  fanStart.resume();
  buttonOff.style.zIndex = "15";
  bg.style.opacity = "1"
});

document.querySelector(".offbtn").addEventListener("click", () => {
  fanStart.pause();
  buttonOff.style.zIndex = "0";
    bg.style.opacity = "0"
});
