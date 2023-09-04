"use strict";

import { init } from "./js/model.js";

const mainContainer = document.querySelector(".container");
const mapContainer = document.querySelector(".map");
const header = document.querySelector(".header");

const mapBlocks = new Array(20).fill("Name of system");

const addMapBlocks = function () {
  mapBlocks.forEach((block) => {
    const div = document.createElement("div");
    div.classList.add("map__block");
    div.textContent = block;
    mapContainer.append(div);
  });
};
addMapBlocks();

init();
