import { colorDot } from "./dot";

const imgWidth = 300;

export function slideRight() {
    const carousel = document.querySelector(".carousel");
    const regex = /(\d+)px/;
    const computedStyle = window.getComputedStyle(carousel);
    const currentPosition = computedStyle.getPropertyValue("right");
    const match = currentPosition.match(regex);
    if (match[1] >= 0 && match[1] <= 900) {
        carousel.style.right = `${parseInt(match[1], 10) + imgWidth}px`;
    } else if (computedStyle.getPropertyValue("right") === "1200px") {
        carousel.style.right = "0px";
    }
    colorDot();
}

export function slideLeft() {
    const carousel = document.querySelector(".carousel");
    const regex = /(\d+)px/;
    const computedStyle = window.getComputedStyle(carousel);
    const currentPosition = computedStyle.getPropertyValue("left");
    const match = currentPosition.match(regex);
    if (match[1] > 0 && match[1] <= 1200) {
        carousel.style.right = `${parseInt(match[1], 10) - imgWidth}px`;
    } else if (computedStyle.getPropertyValue("right") === "0px") {
        carousel.style.right = "1200px";
    }
    colorDot();
}
