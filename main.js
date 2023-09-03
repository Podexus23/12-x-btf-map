"use strict";
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

const countPositionForBlock = function () {
  const topCoords = mapContainer.getBoundingClientRect().y;
  const leftCoords = mapContainer.getBoundingClientRect().x;
  return { topCoords, leftCoords };
};

let objectToMove;
let objX;
let objY;

document.addEventListener("mousedown", (e) => {
  objectToMove = e.target;
  console.log(objectToMove);
  objX = e.clientX - objectToMove.getBoundingClientRect().x;
  objY = e.clientY - objectToMove.getBoundingClientRect().y;
});

document.addEventListener("mousemove", (e) => {
  if (!objectToMove) return;
  if (objectToMove.closest(".map__block")) {
    const countedCoords = countPositionForBlock();
    objectToMove.style.position = `absolute`;

    objectToMove.style.top = `${e.clientY - countedCoords.topCoords - objY}px`;
    objectToMove.style.left = `${
      e.clientX - countedCoords.leftCoords - objX
    }px`;
  } else if (
    objectToMove.classList.contains("container") ||
    e.target.closest(".container")
  ) {
    objectToMove.style.position = `absolute`;

    objectToMove.style.top = `${e.clientY - objY}px`;
    objectToMove.style.left = `${e.clientX - objX}px`;
  }
});

document.addEventListener("mouseup", (e) => {
  if (objectToMove && objectToMove.closest(".map__block")) {
    objX = e.clientX - objectToMove.getBoundingClientRect().x;
    objY = e.clientY - objectToMove.getBoundingClientRect().y;
    objectToMove = "";
  } else if (objectToMove.classList.contains("container")) {
    objX = e.clientX - objectToMove.getBoundingClientRect().x;
    objY = e.clientY - objectToMove.getBoundingClientRect().y;
    objectToMove = "";
  }
});
