export function generateDotIds() {
    const buttons = document.querySelectorAll(".dot");
    let idCounter = 1;
    buttons.forEach((item) => {
        const button = item;
        button.id = `dot-${idCounter}`;
        idCounter += 1;
    });
}

export function handleDotClick() {

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
        })
        const dotOne = document.getElementById("dot-1");
        dotOne.style.backgroundColor = "black";
    }
    if (currentPosition === "200px") {
        allDots.forEach((item) => {
            const dot = item;
            dot.style.backgroundColor = "aliceblue"; // Reset all dot colors first 
        })
        const dotTwo = document.getElementById("dot-2");
        dotTwo.style.backgroundColor = "black";
    }
    if (currentPosition === "400px") {
        allDots.forEach((item) => {
            const dot = item;
            dot.style.backgroundColor = "aliceblue"; // Reset all dot colors first 
        })
        const dotThree = document.getElementById("dot-3");
        dotThree.style.backgroundColor = "black";
    }
    if (currentPosition === "600px") {
        allDots.forEach((item) => {
            const dot = item;
            dot.style.backgroundColor = "aliceblue"; // Reset all dot colors first 
        })
        const dotFour = document.getElementById("dot-4");
        dotFour.style.backgroundColor = "black";
    }
    if (currentPosition === "800px") {
        allDots.forEach((item) => {
            const dot = item;
            dot.style.backgroundColor = "aliceblue"; // Reset all dot colors first 
        })
        const dotFive = document.getElementById("dot-5");
        dotFive.style.backgroundColor = "black";
    }
}