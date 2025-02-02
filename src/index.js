import "./style.css";
import { slideRight, slideLeft } from "../slide";

const rightButton = document.getElementById("right-button");
rightButton.addEventListener("click", slideRight);

const leftButton = document.getElementById("left-button");
leftButton.addEventListener("click", slideLeft);