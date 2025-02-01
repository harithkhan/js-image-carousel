export function slideRight() {
    const carousel = document.querySelector(".carousel");
    const regex = /(\d+)px/;
    const computedStyle = window.getComputedStyle(carousel);
    const currentPosition = computedStyle.getPropertyValue("right")
    const match = currentPosition.match(regex);
    console.log(match[1])
    if (!carousel.style.right) {
        carousel.style.right = "200px";
    } else if (match[1] >= 200 && match[1] <= 600){
        carousel.style.right = `${parseInt(match[1], 10) + 200}px`
    }
}