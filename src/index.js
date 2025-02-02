import "./style.css";
import { slideRight, slideLeft } from "./slide";
import { colorDot, generateDotIds, handleDotClick } from "./dot";

generateDotIds();
colorDot();

const rightButton = document.getElementById("right-button");
rightButton.addEventListener("click", slideRight);

const leftButton = document.getElementById("left-button");
leftButton.addEventListener("click", slideLeft);

const dotButtons = document.querySelectorAll(".dot");
dotButtons.forEach((item) => {
    const dotButton = item;
    dotButton.addEventListener("click", handleDotClick);
})

setInterval(slideRight, 5000);