const leftRightbuttonPanel = document.querySelectorAll("i");
const selectButton = document.querySelector(".select_button");
const wrapper = document.querySelector(".wrapper");
const images = document.querySelectorAll(".image");
const screen = document.querySelector(".screen");

let active = 0;

//main show function
function slideShow(event) {
  for (let img of images) {
    img.style.translate = `${-active * 100}%`;
  }
  selectButtonColor();
}

//Radoi button click
function selectActiveButton(event) {
  if (event.target.matches(".select_button")) return;
  if (event.target == event.currentTarget) return;
  const newActive = Number(event.target.id);
  console.log(newActive);
  active = newActive;
  slideShow();
}

//Left or Right Button Click
function leftRightButton(event) {
  if (event.target.matches("i")) {
    event.target.className.endsWith("right") ? active++ : active--;
  }
  if (active >= images.length) active = 0;
  if (active <= -1) active = images.length - 1;
  slideShow();
}

//Mouse slider
function mouseDownSlideShow(event) {
  let width = event.currentTarget.getBoundingClientRect().width;
  if (event.clientX > 1 && event.clientX < width / 2) active--;
  if (event.clientX > width / 2 && event.clientX < width) active++;
  if (active >= images.length) active = 0;
  if (active <= -1) active = images.length - 1;
  slideShow();
}

//Color selected button
function selectButtonColor() {
  for (let button of selectButton.children) {
    if (Number(button.id) == active) button.classList.add("selected");
    else button.classList.remove("selected");
  }
}

selectButton.addEventListener("click", selectActiveButton);
leftRightbuttonPanel[0].addEventListener("click", leftRightButton);
leftRightbuttonPanel[1].addEventListener("click", leftRightButton);
screen.addEventListener("mousedown", () => {
  screen.addEventListener("mouseup", mouseDownSlideShow);
});

window.addEventListener("DOMContentLoaded", selectButtonColor);
