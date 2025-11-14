let fanStart = gsap.to(".fan", {
  rotation: 36100,
  duration: 10,
  repeat: -1,
  ease: "none",
});
gsap.to(".logo-bg", {
  backgroundColor: "yellow",
  yoyo: true,
  duration: 3,
  repeat: -1,
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
