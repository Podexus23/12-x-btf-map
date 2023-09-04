import { systems, allSystems } from "./data/systemsData.js";
import { mapColSize, mapRowSize, mapSize } from "./config.js";

const mainContainer = document.querySelector(".container");
const mapContainer = document.querySelector(".map");
const header = document.querySelector(".header");

/**
 * Create empty blocks for the map
 * @param {number} numOfBlocks
 */
const createMapBlocks = function (numOfBlocks) {
  let columnCoord = 0;
  for (let i = 0; i < numOfBlocks; i++) {
    let rowCoord = i % mapRowSize;
    columnCoord = Math.floor(i / mapColSize);

    const div = document.createElement("div");
    div.classList.add("map__block");
    div.textContent = `block`;
    div.dataset.coords = `${rowCoord},${columnCoord}`;

    mapContainer.append(div);
  }
};
/**
 * Add data to map block from Data about systems
 */
const generateMap = function () {
  const names = Object.keys(systems);

  let blocks = mapContainer.querySelectorAll(".map__block");
  blocks.forEach((block) => {
    const [x, y] = block.dataset.coords.split(",");
    let isEmpty = true;

    names.forEach((name, i) => {
      const [sysY, sysX] = systems[`${name}`].coords;

      if (+sysX === +x && +sysY === +y) {
        block.textContent = name;
        names.splice(i, 1);
        block.classList.remove("hidden");
        isEmpty = false;
        return;
      }
    });
    if (isEmpty) block.classList.add("hidden");
  });
  console.log(blocks);
};

const init = function () {
  createMapBlocks(mapSize);
  generateMap();
};

export { init };
