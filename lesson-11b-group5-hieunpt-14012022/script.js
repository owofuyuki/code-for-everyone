const container = document.querySelector(".container");

const switchButton = document.querySelector(".day-night-switch__checkbox");

switchButton.addEventListener("change", () => {
    container.style.backgroundColor = "#feffee";
    container.style.color = "#333333";
	container.classList.toggle("dark");
});

const darkblue  = document.querySelector(".container__button--darkblue"),
      lightblue = document.querySelector(".container__button--lightblue"),
      green     = document.querySelector(".container__button--green"),
      yellow    = document.querySelector(".container__button--yellow"),
      orange    = document.querySelector(".container__button--orange"),
      red       = document.querySelector(".container__button--red");

darkblue.onclick = function () {
    container.style.backgroundColor = "#3a4f7a";
    container.style.color = "#ffffff";
};

lightblue.onclick = function () {
    container.style.backgroundColor = "#60b0e0";
    container.style.color = "#333333";
};

green.onclick = function () {
    container.style.backgroundColor = "#48d09a";
    container.style.color = "#333333";
};

yellow.onclick = function () {
    container.style.backgroundColor = "#ffe36a";
    container.style.color = "#333333";
};

orange.onclick = function () {
    container.style.backgroundColor = "#ee7616";
    container.style.color = "#ffffff";
};

red.onclick = function () {
    container.style.backgroundColor = "#d52f41";
    container.style.color = "#ffffff";
};