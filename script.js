const grid = document.querySelector("#grid");

window.onload = () => {
  for (let i = 0; i < 16 * 16; i++) {
    const tile = document.createElement("p");
    tile.classList.add("tile");
    grid.appendChild(tile);
  }
};
