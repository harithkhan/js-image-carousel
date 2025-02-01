import "./style.css";
import { slideRight } from "../slide";

const rightButton = document.getElementById("right-button");
rightButton.addEventListener("click", slideRight);