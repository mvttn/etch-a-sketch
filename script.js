/* 
1. Create grid
2. Drawing functionality
3. Change colour (Colour selection option)
4. Change grid size
5. Shading function
*/

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

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeTileColour(event) {
  if (event.type === "mouseover" && !mouseDown) {
    return;
  }
  event.target.style.backgroundColor = "black";
}

window.onload = () => {
  createGrid();
};
