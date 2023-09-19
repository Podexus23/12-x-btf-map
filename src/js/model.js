import { systems } from "./data/systemsData.js";
import { races } from "./data/racesData.js";
import { mapColSize, mapRowSize, mapSize } from "./config.js";

const mainContainer = document.querySelector(".container");
const header = document.querySelector(".header");

const mapContainer = document.querySelector(".map");

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
    // div.textContent = `block`;
    div.dataset.coords = `${rowCoord},${columnCoord}`;

    mapContainer.append(div);
  }
};

/**
 * Add data to map block with Data from systems.js
 */
//Add content from data to generated block
const addContentToBlock = function (block, nameOfSystem) {
  const data = systems[`${nameOfSystem}`];
  // block.textContent = nameOfSystem;
  // if (races.includes(data.race))
  //   block.classList.add(`map__block--${data.race.toLowerCase()}`);
  let content = `
  <div class="wrapper map__block--${data.race.toLowerCase()}">
            <p>${nameOfSystem}</p>
  </div>
  <span class="map__block--side map__block--side-e"></span>
  <span class="map__block--side map__block--side-w"></span>
  <span class="map__block--side map__block--side-n"></span>
  <span class="map__block--side map__block--side-s"></span>
  `;
  block.insertAdjacentHTML("afterbegin", content);
};

const generateMap = function () {
  const names = Object.keys(systems);
  //take all blocks
  let blocks = mapContainer.querySelectorAll(".map__block");

  //Check if block data have same coordinates as system in data
  //if true - add content, else add hidden class
  blocks.forEach((block) => {
    const [x, y] = block.dataset.coords.split(",");
    let isEmpty = true;

    names.forEach((name, i) => {
      const [sysY, sysX] = systems[`${name}`].coords;

      if (+sysX === +x && +sysY === +y) {
        addContentToBlock(block, name);
        //remove name of found system for better search
        names.splice(i, 1);
        isEmpty = false;
        return;
      }
    });

    if (isEmpty) block.classList.add("hidden");
  });
};

const init = function () {
  createMapBlocks(mapSize);
  generateMap();
};

export { init };
