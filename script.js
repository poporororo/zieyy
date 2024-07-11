const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Good to know😍!";
  gif.src =
    "https://media.tenor.com/rLsTS3eQiyoAAAAi/tonton-friends-tobi.gif";
});

noBtn.addEventListener("click", () => {
  question.innerHTML = "Cheer up!";
  gif.src =
    "https://i.pinimg.com/originals/55/f5/fd/55f5fdc9455989f8caf7fca7f93bd96a.gif";
});