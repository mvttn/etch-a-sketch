/* 
1. Create grid X
2. Drawing functionality X 
3. Change colour (Colour selection option)
4. Change grid size
5. Shading function
*/

const grid = document.querySelector("#grid");
const gridSizeSlider = document.querySelector("#gridSizeSlider");
gridSizeSlider.onchange = (e) => changeGridSize();

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
  let selectedColour = document.querySelector("#colourPicker").value;
  event.target.style.backgroundColor = selectedColour;
}

window.onload = () => {
  createGrid();
};
