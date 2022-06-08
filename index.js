let slider = document.querySelector(".wrapper__list");
let pointerdown = 0;
let pointerup = 0;
let slide = 0;

document.addEventListener("touchstart", (e) => {
  return (pointerdown = e.changedTouches[0].clientX);
});

document.addEventListener("touchend", (e) => {
  pointerup = e.changedTouches[0].clientX;
  if (pointerup === pointerdown) {
    return;
  }

  if (Math.abs(pointerdown - pointerup) < 50) {
    return;
  }

  if (pointerdown - pointerup < 0) {
    slide++;
    if (slide > 0) {
      slide = 0;
      return;
    }
    slider.style.transform = `translateX(${slide * 100}vw)`;
  } else {
    slide--;

    if (slide < -2) {
      slide = -2;
      return;
    }
    slider.style.transform = `translateX(${slide * 100}vw)`;
  }

  if (slide === -1) {
    let delay = 3;
    document.querySelectorAll(".about__animation").forEach((i) => {
      delay++;
      i.style.animationPlayState = "running";
    });
  }
});

document.querySelector(".wrapper__home").onclick = () => {
  slider.style.transform = `translateX(0vw)`;
  slide = 0;
};

document.querySelector(".button").onclick = () => {
  slider.style.transform = `translateX(-100vw)`;
  slide = -1;
};

document.querySelector(".brend__btn").onclick = () => {
  document.querySelector(".brend__name").innerHTML = "преимущества";
  document.querySelector(".brend__bg").style.opacity = "0.7";
  document.querySelector(".brend__popup").style.opacity = "1";
  document.querySelector(".brend__popup").style.zIndex = "3";
};

document.querySelector(".brend__close").onclick = () => {
  document.querySelector(".brend__name").innerHTML = "Ключевое сообщение";
  document.querySelector(".brend__bg").style.opacity = "0";
  document.querySelector(".brend__popup").style.opacity = "0";
  document.querySelector(".brend__popup").style.zIndex = "1";
};

const items = document.querySelectorAll(".brend__point");
for (let i = 3; i < 6; i++) {
  items[i].style.position = "absolute";
  items[i].style.opacity = "0";
}

const buttonPrev = document.querySelector(".brend__arrow_left");
const buttonNext = document.querySelector(".brend__arrow_right");

buttonPrev.onclick = () => {
  buttonNext.classList.remove("active");
  buttonPrev.classList.add("active");
  let i = 0;
  while (i < 6) {
    if (i < 3) {
      items[i].style.position = "static";
      items[i].style.opacity = "1";
      items[i].style.transition = "opacity 0.4s";
    } else {
      items[i].style.position = "absolute";
      items[i].style.opacity = "0";
      items[i].style.transition = "none";
    }
    i++;
  }
};

buttonNext.onclick = () => {
  buttonPrev.classList.remove("active");
  buttonNext.classList.add("active");
  let i = 0;
  while (i < 6) {
    if (i > 2) {
      items[i].style.position = "static";
      items[i].style.opacity = "1";
      items[i].style.transition = "opacity 0.4s";
    } else {
      items[i].style.position = "absolute";
      items[i].style.opacity = "0";
      items[i].style.transition = "none";
    }
    i++;
  }
};
