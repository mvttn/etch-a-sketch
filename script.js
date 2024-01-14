/* 
1. Create grid X
2. Drawing functionality X 
3. Change colour (Colour selection option)
4. Change grid size
5. Shading function
*/

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function createGrid() {
  const grid = document.querySelector("#grid");
  for (let i = 0; i < 16 * 16; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.addEventListener("mouseover", changeTileColour);
    tile.addEventListener("mousedown", changeTileColour);
    grid.appendChild(tile);
  }
}

function changeTileColour(event) {
  if (event.type === "mouseover" && !mouseDown) {
    return;
  }
  let selectedColour = document.querySelector("#colourpicker").value;
  event.target.style.backgroundColor = selectedColour;
}

window.onload = () => {
  createGrid();
};
