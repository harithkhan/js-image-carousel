export function generateDotIds() {
    const buttons = document.querySelectorAll(".dot");
    let idCounter = 1;
    buttons.forEach((item) => {
        const button = item;
        button.id = `dot-${idCounter}`;
        idCounter += 1;
    });
}

export function colorDot() {
    // const dot = document.querySelectorAll(".dot");
    const carousel = document.querySelector(".carousel");
    const computedStyle = window.getComputedStyle(carousel);
    const currentPosition = computedStyle.getPropertyValue("right");
    const allDots = document.querySelectorAll(".dot");
    if (currentPosition === "0px") {
        allDots.forEach((item) => {
            const dot = item;
            dot.style.backgroundColor = "aliceblue"; // Reset all dot colors first
        });
        const dotOne = document.getElementById("dot-1");
        dotOne.style.backgroundColor = "black";
    }
    if (currentPosition === "200px") {
        allDots.forEach((item) => {
            const dot = item;
            dot.style.backgroundColor = "aliceblue"; // Reset all dot colors first
        });
        const dotTwo = document.getElementById("dot-2");
        dotTwo.style.backgroundColor = "black";
    }
    if (currentPosition === "400px") {
        allDots.forEach((item) => {
            const dot = item;
            dot.style.backgroundColor = "aliceblue"; // Reset all dot colors first
        });
        const dotThree = document.getElementById("dot-3");
        dotThree.style.backgroundColor = "black";
    }
    if (currentPosition === "600px") {
        allDots.forEach((item) => {
            const dot = item;
            dot.style.backgroundColor = "aliceblue"; // Reset all dot colors first
        });
        const dotFour = document.getElementById("dot-4");
        dotFour.style.backgroundColor = "black";
    }
    if (currentPosition === "800px") {
        allDots.forEach((item) => {
            const dot = item;
            dot.style.backgroundColor = "aliceblue"; // Reset all dot colors first
        });
        const dotFive = document.getElementById("dot-5");
        dotFive.style.backgroundColor = "black";
    }
}

export function handleDotClick(event) {
    const clickedButton = event.target;
    const carousel = document.querySelector(".carousel");
    const buttonOne = document.getElementById("dot-1");
    const buttonOnePosition = "0px";
    const buttonTwo = document.getElementById("dot-2");
    const buttonTwoPosition = "200px";
    const buttonThree = document.getElementById("dot-3");
    const buttonThreePosition = "400px";
    const buttonFour = document.getElementById("dot-4");
    const buttonFourPosition = "600px";
    const buttonFive = document.getElementById("dot-5");
    const buttonFivePosition = "800px";
    if (clickedButton === buttonOne) {
        carousel.style.right = buttonOnePosition;
    }
    if (clickedButton === buttonTwo) {
        carousel.style.right = buttonTwoPosition;
    }
    if (clickedButton === buttonThree) {
        carousel.style.right = buttonThreePosition;
    }
    if (clickedButton === buttonFour) {
        carousel.style.right = buttonFourPosition;
    }
    if (clickedButton === buttonFive) {
        carousel.style.right = buttonFivePosition;
    }
    colorDot();
    console.log(clickedButton)
    console.log(buttonOne)
}
