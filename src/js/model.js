import { systems, allSystems } from "./systemsData.js";

const mainContainer = document.querySelector(".container");
const mapContainer = document.querySelector(".map");
const header = document.querySelector(".header");

const mapBlocks = allSystems;

const addMapBlocks = function () {
  mapBlocks.forEach((block) => {
    const div = document.createElement("div");
    div.classList.add("map__block");
    div.textContent = block;
    mapContainer.append(div);
  });
};

const init = function () {
  console.log(systems);
  addMapBlocks();
};

export { init };
