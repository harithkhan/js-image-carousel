import { colorDot } from "./src/dot";

export function slideRight() {
    const carousel = document.querySelector(".carousel");
    const regex = /(\d+)px/;
    const computedStyle = window.getComputedStyle(carousel);
    const currentPosition = computedStyle.getPropertyValue("right");
    const match = currentPosition.match(regex);
    console.log(`Before: ${match[1]}`);
    if (match[1] >= 0 && match[1] <= 600) {
        carousel.style.right = `${parseInt(match[1], 10) + 200}px`;
        console.log(`After: ${computedStyle.getPropertyValue("right")}`);
    } else if (computedStyle.getPropertyValue("right") === "800px") {
        carousel.style.right = "0px";
        console.log(`After: ${computedStyle.getPropertyValue("right")}`);
    }
    colorDot();
}

export function slideLeft() {
    const carousel = document.querySelector(".carousel");
    const regex = /(\d+)px/;
    const computedStyle = window.getComputedStyle(carousel);
    const currentPosition = computedStyle.getPropertyValue("left");
    const match = currentPosition.match(regex);
    console.log(`Before: ${match[1]}`);
    if (match[1] > 0 && match[1] <= 800) {
        carousel.style.right = `${parseInt(match[1], 10) - 200}px`;
        console.log(`After: ${computedStyle.getPropertyValue("right")}`);
    } else if (computedStyle.getPropertyValue("right") === "0px") {
        carousel.style.right = "800px";
        console.log(`After: ${computedStyle.getPropertyValue("right")}`);
    }
    colorDot();
}
