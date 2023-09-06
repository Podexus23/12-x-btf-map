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
    neighbours: {
      north: null,
      west: null,
      south: "Three Worlds",
      east: "Rolk's Drift",
    },
  },
  "Rolk's Drift": {
    race: "Boron",
    coords: [0, 1],
    neighbours: {
      north: null,
      west: "Kingdom End",
      south: null,
      east: "Queen's Space",
    },
  },
  "Queen's Space": {
    race: "Boron",
    coords: [0, 2],
    neighbours: {
      north: null,
      west: "Rolk's Drift",
      south: null,
      east: "Menelaus Fr.",
    },
  },
  "Menelaus Fr.": {
    race: "Boron",
    coords: [0, 3],
    neighbours: {
      north: null,
      west: "Queen's Space",
      south: "Rolk's Fate",
      east: "Ceo's Buckzoid",
    },
  },
  "Ceo's Buckzoid": {
    race: "Argon",
    coords: [0, 4],
    neighbours: {
      north: null,
      west: "Menelaus Fr.",
      south: "Profit Share",
      east: "Teladi Gain",
    },
  },
  "Teladi Gain": {
    race: "Argon",
    coords: [0, 5],
    neighbours: {
      north: null,
      west: "Ceo's Buckzoid",
      south: "Seizewell",
      east: "Family Whi",
    },
  },
  "Family Whi": {
    race: "Split",
    coords: [0, 6],
    neighbours: {
      north: null,
      west: "Teladi Gain",
      south: "Family Zein",
      east: null,
    },
  },

  //second row
  "Three Worlds": {
    race: "Argon",
    coords: [1, 0],
    neighbours: {
      north: "Kingdom End",
      west: null,
      south: "Cloudbase NW",
      east: "Power Circle",
    },
  },
  "Power Circle": {
    race: "Argon",
    coords: [1, 1],
    neighbours: {
      north: null,
      west: "Three Worlds",
      east: "Antigone Mem.",
      south: "Herron's Nebula",
    },
  },
  "Antigone Mem.": {
    race: "Argon",
    coords: [1, 2],
    neighbours: {
      north: null,
      west: "Power Circle",
      east: null,
      south: "The Hole",
    },
  },
  "Rolk's Fate": {
    race: "Boron",
    coords: [1, 3],
    neighbours: {
      north: "Menelaus Fr.",
      west: null,
      east: null,
      south: "Atreus Clouds",
    },
  },
  "Profit Share": {
    race: "Teladi",
    coords: [1, 4],
    neighbours: {
      north: "Ceo's Buckzoid",
      west: null,
      east: "Seizewell",
      south: "S'weed Drift",
    },
  },
  Seizewell: {
    race: "Teladi",
    coords: [1, 5],
    neighbours: {
      north: "Teladi Gain",
      west: "Profit Share",
      east: null,
      south: "Greater Profit",
    },
  },
  "Family Zein": {
    race: "Split",
    coords: [1, 6],
    neighbours: {
      north: "Family Whi",
      west: null,
      east: null,
      south: "Thuruk's Pride",
    },
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
