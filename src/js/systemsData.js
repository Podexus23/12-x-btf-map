const races = ["Argon", "Boron", "Paranid", "Split", "Teladi", "Xenon"];

export const allSystems = [
  "Kingdom End",
  "Rolk's Drift",
  "Queen's Space",
  "Menelaus Fr.",

  "Ceo's Buckzoid",
  "Teladi Gain",
  "Family Whi",
  "Three Worlds",

  "Power Circle",
  "Antigone Mem.",
  "Rolk's Fate",
  "Profit Share",
  "Seizewell",
  "Family Zein",
  "Cloudbase NW",
  "Herron's Nebula",
  "The Hole",
  "Atreus Clouds",
  "S'weed Drift",
  "Greater Profit",
  "Thuruk's Pride",
  "Family Pride",
  "Ringo Moon",
  "Argon Prime",
  "The Wall",
  "Xenon Sys. 1",
  "Xenon Sys. 2",
  "Blue Profit",
  "Chins Fire",
  "Chins Clouds",
  "Red Light",
  "Light Home",
  "President's End",
  "Xenon Sys. 3",
  "Xenon Sys. 4",
  "Ceo's Sprite",
  "Family Chins",
  "Cloudbase SW",
  "Ore Belt",
  "Cloudbase SE",
  "Xenon Sys. 5",
  "Xenon Sys. 6",
  "Company Pride",
  "Thuruk's Beard",
  "Emperor Mines",
  "Paranid Prime",
  "Priest Rings",
  "Priest's Pity",
  "Xenon Sys. 7",
  "Xenon Sys. 8",
  "Xenon Sys. 9",
  "Empire's Edge",
  "Duke's Domain",
  "Emperor's Ridge",
];

const systems = {
  "Kingdom End": {
    race: "Boron",
    coords: [0, 0],
  },
  "Rolk's Drift": {
    race: "Boron",
    coords: [0, 1],
  },
  "Queen's Space": {
    race: "Boron",
    coords: [0, 2],
  },
  "Menelaus Fr.": {
    race: "Boron",
    coords: [0, 3],
  },

  "Ceo's Buckzoid": {
    race: "Argon",
    coords: [0, 4],
  },
  "Teladi Gain": {
    race: "Argon",
    coords: [0, 5],
  },
  "Family Whi": {
    race: "Split",
    coords: [0, 6],
  },
  "Three Worlds": {
    race: "Argon",
    coords: [1, 0],
  },

  Seizewell: {
    race: "Teladi",
    neighbours: {
      north: `Teladi Gain`,
      west: "Profit Share",
      south: "Greater Profit",
      east: null,
    },
    coords: [5, 1],
  },
};
export { systems };
