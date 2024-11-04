const container = document.querySelector(".container");
const button = document.querySelector("button");

button.addEventListener("click", createNewGrid);

function createGrid(squareSide) {
    container.innerHTML = "";

    for (let i = 1; i <= squareSide * squareSide; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        //square.textContent = i;
        square.style.flex = `1 0 calc(100% / (${squareSide} + 1))`;
        console.log(squareSide);
    
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        });
        container.appendChild(square);
    }
}

function createNewGrid() {
    let squareSide = prompt("Enter the number of squares per side (1-100): ");

    squareSide = parseInt(squareSide);

    if (isNaN(squareSide) || squareSide < 1 || squareSide > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    createGrid(squareSide);
}