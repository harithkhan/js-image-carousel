export function generateDotIds() {
    const buttons = document.querySelectorAll(".dot");
    let idCounter = 1;
    buttons.forEach((item) => {
        const button = item;
        button.id = `dot-${idCounter}`;
        idCounter += 1;
    });
}
