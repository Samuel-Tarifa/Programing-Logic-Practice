document.addEventListener("DOMContentLoaded", () => {
  const WIDTH = 10;
  const HEIGHT = 10;

  const narrator = document.querySelector(".narrator");
  const table = document.querySelector(".theater-map");

  for (let i = 0; i < HEIGHT; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < WIDTH; j++) {
      const cell = document.createElement("div");
      cell.classList.add("item");
      cell.classList.add("available");
      cell.textContent = "L";

      cell.addEventListener("click", (e) => reservar(e));

      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  function reservar(e) {
    const item=e.target
    if(item.classList.contains('available')){
      item.textContent='X'
      item.classList.remove('available')
      item.classList.add('sold')
      narrator.textContent='Asiento reservado correctamente'
    } else if(item.classList.contains('sold')){
      narrator.textContent='Este asiento ya esta reservado, por favor elige otro'
    }
  }
});
