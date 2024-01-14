const DEFAULT_MODE = "singleColour";
let currentMode = DEFAULT_MODE;

const grid = document.querySelector("#grid");
const gridSizeSlider = document.querySelector("#gridSizeSlider");
gridSizeSlider.onchange = (e) => changeGridSize();
gridSizeSlider.onmousemove = (e) => getGridSize();

const singleModeBtn = document.querySelector("#singleColour");
const randomModeBtn = document.querySelector("#randomColour");
const eraserModeBtn = document.querySelector("#eraser");

singleModeBtn.addEventListener("click", () => {
  currentMode = "singleColour";
  activateButton();
});
randomModeBtn.addEventListener("click", () => {
  currentMode = "randomColour";
  activateButton();
});
eraserModeBtn.addEventListener("click", () => {
  currentMode = "eraser";
  activateButton();
});

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function getGridSize() {
  let gridDimensions = document.querySelector("#gridDimensions");
  let gridSize = gridSizeSlider.value;
  gridDimensions.textContent = `${gridSize} x ${gridSize}`;
  return parseInt(gridSize);
}

function changeGridSize() {
  reloadGrid();
}

function reloadGrid() {
  clearGrid();
  createGrid();
}

function clearGrid() {
  grid.innerHTML = "";
}

function createGrid() {
  let gridSize = getGridSize();
  for (let i = 0; i < gridSize ** 2; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.addEventListener("mouseover", changeTileColour);
    tile.addEventListener("mousedown", changeTileColour);
    /* Scale the width and height with the grid size 
    so it is able to fit in the 650px x 650px space */
    let width = 650 / gridSize;
    let height = width;
    tile.style.width = `${width}px`;
    tile.style.height = `${height}px`;
    grid.appendChild(tile);
  }
}

function changeTileColour(event) {
  // Only change the tile colour if mouse is clicked
  if (event.type === "mouseover" && !mouseDown) {
    return;
  }
  // Change tile colour depending on current mode
  if (currentMode === "randomColour") {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    event.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else if (currentMode === "singleColour") {
    let selectedColour = document.querySelector("#colourPicker").value;
    event.target.style.backgroundColor = selectedColour;
  } else if (currentMode === "eraser") {
    event.target.style.backgroundColor = "white";
  }
}

function activateButton() {
  // Change styling of clicked button
  if (currentMode === "randomColour") {
    randomModeBtn.classList.add("active");
    singleModeBtn.classList.remove("active");
    eraserModeBtn.classList.remove("active");
  } else if (currentMode === "singleColour") {
    singleModeBtn.classList.add("active");
    randomModeBtn.classList.remove("active");
    eraserModeBtn.classList.remove("active");
  } else if (currentMode === "eraser") {
    eraserModeBtn.classList.add("active");
    randomModeBtn.classList.remove("active");
    singleModeBtn.classList.remove("active");
  }
}

window.onload = () => {
  createGrid();
};
