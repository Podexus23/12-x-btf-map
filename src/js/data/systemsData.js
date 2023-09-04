const allSystems = [
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
  //first row
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

  //second row
  "Three Worlds": {
    race: "Argon",
    coords: [1, 0],
  },
  "Power Circle": {
    race: "Argon",
    coords: [1, 1],
  },
  "Antigone Mem.": {
    race: "Argon",
    coords: [1, 2],
  },
  "Rolk's Fate": {
    race: "Boron",
    coords: [1, 3],
  },
  "Profit Share": {
    race: "Teladi",
    coords: [1, 4],
  },
  Seizewell: {
    race: "Teladi",
    neighbours: {
      north: `Teladi Gain`,
      west: "Profit Share",
      south: "Greater Profit",
      east: null,
    },
    coords: [1, 5],
  },
  "Family Zein": {
    race: "Split",
    coords: [1, 6],
  },
  //third row
  "Cloudbase NW": {
    race: "Argon",
    coords: [2, 0],
  },
  "Herron's Nebula": {
    race: "Argon",
    coords: [2, 1],
  },
  "The Hole": {
    race: "Argon",
    coords: [2, 2],
  },
  "Atreus Clouds": {
    race: "Boron",
    coords: [2, 3],
  },
  "S'weed Drift": {
    race: "Teladi",
    coords: [2, 4],
  },
  "Greater Profit": {
    race: "Teladi",
    coords: [2, 5],
  },
  "Thuruk's Pride": {
    race: "Split",
    coords: [2, 6],
  },
  "Family Pride": {
    race: "Split",
    coords: [2, 7],
  },
  //Fourth row

  "Ringo Moon": {
    race: "Argon",
    coords: [3, 0],
  },
  "Argon Prime": {
    race: "Argon",
    coords: [3, 1],
  },
  "The Wall": {
    race: "Argon",
    coords: [3, 2],
  },
  "Xenon Sys. 1": {
    race: "Xenon",
    coords: [3, 3],
  },
  "Xenon Sys. 2": {
    race: "Xenon",
    coords: [3, 4],
  },
  "Blue Profit": {
    race: "Teladi",
    coords: [3, 5],
  },
  "Chins Fire": {
    race: "Split",
    coords: [3, 6],
  },
  "Chins Clouds": {
    race: "Split",
    coords: [3, 7],
  },
  //fifth row
  "Red Light": {
    race: "Argon",
    coords: [4, 0],
  },
  "Light Home": {
    race: "Argon",
    coords: [4, 1],
  },
  "President's End": {
    race: "Argon",
    coords: [4, 2],
  },
  "Xenon Sys. 3": {
    race: "Xenon",
    coords: [4, 3],
  },
  "Xenon Sys. 4": {
    race: "Xenon",
    coords: [4, 4],
  },
  "Ceo's Sprite": {
    race: "Teladi",
    coords: [4, 5],
  },
  "Family Chins": {
    race: "Split",
    coords: [4, 6],
  },
  //sixth row
  "Cloudbase SW": {
    race: "Argon",
    coords: [5, 0],
  },
  "Ore Belt": {
    race: "Argon",
    coords: [5, 1],
  },
  "Cloudbase SE": {
    race: "Argon",
    coords: [5, 2],
  },
  "Xenon Sys. 5": {
    race: "Xenon",
    coords: [5, 3],
  },
  "Xenon Sys. 6": {
    race: "Xenon",
    coords: [5, 4],
  },
  "Company Pride": {
    race: "Teladi",
    coords: [5, 5],
  },
  "Thuruk's Beard": {
    race: "Split",
    coords: [5, 6],
  },
  //seventh row
  "Emperor Mines": {
    race: "Paranid",
    coords: [6, 0],
  },
  "Paranid Prime": {
    race: "Paranid",
    coords: [6, 1],
  },
  "Priest Rings": {
    race: "Paranid",
    coords: [6, 2],
  },
  "Priest's Pity": {
    race: "Paranid",
    coords: [6, 3],
  },
  "Xenon Sys. 7": {
    race: "Xenon",
    coords: [6, 4],
  },
  "Xenon Sys. 8": {
    race: "Xenon",
    coords: [6, 5],
  },
  "Xenon Sys. 9": {
    race: "Xenon",
    coords: [6, 6],
  },
  //eight row
  "Empire's Edge": {
    race: "Paranid",
    coords: [7, 1],
  },
  "Duke's Domain": {
    race: "Paranid",
    coords: [7, 2],
  },
  "Emperor's Ridge": {
    race: "Paranid",
    coords: [7, 3],
  },
};
export { systems, allSystems };
