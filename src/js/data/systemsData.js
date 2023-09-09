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
    neighbours: {
      north: "Three Worlds",
      west: null,
      east: "Herron's Nebula",
      south: "Ringo Moon",
    },
  },
  "Herron's Nebula": {
    race: "Argon",
    coords: [2, 1],
    neighbours: {
      north: "Power Circle",
      west: "Cloudbase NW",
      east: "The Hole",
      south: "Argon Prime",
    },
  },
  "The Hole": {
    race: "Argon",
    coords: [2, 2],
    neighbours: {
      north: "Antigone Mem.",
      west: "Herron's Nebula",
      east: "Atreus Clouds",
      south: "The Wall",
    },
  },
  "Atreus Clouds": {
    race: "Boron",
    coords: [2, 3],
    neighbours: {
      north: "Rolk's Fate",
      west: "The Hole",
      east: null,
      south: "Xenon Sys. 1",
    },
  },
  "S'weed Drift": {
    race: "Teladi",
    coords: [2, 4],
    neighbours: {
      north: "Profit Share",
      west: null,
      east: "Greater Profit",
      south: null,
    },
  },
  "Greater Profit": {
    race: "Teladi",
    coords: [2, 5],
    neighbours: {
      north: "Seizewell",
      west: "S'weed Drift",
      east: null,
      south: "Blue Profit",
    },
  },
  "Thuruk's Pride": {
    race: "Split",
    coords: [2, 6],
    neighbours: {
      north: "Family Zein",
      west: null,
      east: "Family Pride",
      south: "Chins Fire",
    },
  },
  "Family Pride": {
    race: "Split",
    coords: [2, 7],
    neighbours: {
      north: null,
      west: "Thuruk's Pride",
      east: null,
      south: "Chins Clouds",
    },
  },

  //Fourth row
  "Ringo Moon": {
    race: "Argon",
    coords: [3, 0],
    neighbours: {
      north: "Cloudbase NW",
      west: null,
      east: "Argon Prime",
      south: "Red Light",
    },
  },
  "Argon Prime": {
    race: "Argon",
    coords: [3, 1],
    neighbours: {
      north: "Herron's Nebula",
      west: "Ringo Moon",
      east: "The Wall",
      south: "Light Home",
    },
  },
  "The Wall": {
    race: "Argon",
    coords: [3, 2],
    neighbours: {
      north: "The Hole",
      west: "Argon Prime",
      east: null,
      south: "President's End",
    },
  },
  "Xenon Sys. 1": {
    race: "Xenon",
    coords: [3, 3],
    neighbours: {
      north: "Atreus Clouds",
      west: null,
      east: "Xenon Sys. 2",
      south: "Xenon Sys. 3",
    },
  },
  "Xenon Sys. 2": {
    race: "Xenon",
    coords: [3, 4],
    neighbours: {
      north: null,
      west: "Xenon Sys. 1",
      east: null,
      south: "Xenon Sys. 4",
    },
  },
  "Blue Profit": {
    race: "Teladi",
    coords: [3, 5],
    neighbours: {
      north: "Greater Profit",
      west: null,
      east: null,
      south: "Ceo's Sprite",
    },
  },
  "Chins Fire": {
    race: "Split",
    coords: [3, 6],
    neighbours: {
      north: "Thuruk's Pride",
      west: null,
      east: "Chins Clouds",
      south: "Family Chins",
    },
  },
  "Chins Clouds": {
    race: "Split",
    coords: [3, 7],
    neighbours: {
      north: "Family Pride",
      west: "Chins Fire",
      east: null,
      south: null,
    },
  },

  //fifth row
  "Red Light": {
    race: "Argon",
    coords: [4, 0],
    neighbours: {
      north: "Ringo Moon",
      west: null,
      east: "Light Home",
      south: "Cloudbase SW",
    },
  },
  "Light Home": {
    race: "Argon",
    coords: [4, 1],
    neighbours: {
      north: "Argon Prime",
      west: "Red Light",
      east: "President's End",
      south: "Ore Belt",
    },
  },
  "President's End": {
    race: "Argon",
    coords: [4, 2],
    neighbours: {
      north: "The Wall",
      west: "Light Home",
      east: "Xenon Sys. 3",
      south: "Cloudbase SE",
    },
  },
  "Xenon Sys. 3": {
    race: "Xenon",
    coords: [4, 3],
    neighbours: {
      north: "Xenon Sys. 1",
      west: "President's End",
      east: "Xenon Sys. 4",
      south: "Xenon Sys. 5",
    },
  },
  "Xenon Sys. 4": {
    race: "Xenon",
    coords: [4, 4],
    neighbours: {
      north: "Xenon Sys. 2",
      west: "Xenon Sys. 3",
      east: null,
      south: "Xenon Sys. 6",
    },
  },
  "Ceo's Sprite": {
    race: "Teladi",
    coords: [4, 5],
    neighbours: {
      north: "Blue Profit",
      west: null,
      east: null,
      south: "Company Pride",
    },
  },
  "Family Chins": {
    race: "Split",
    coords: [4, 6],
    neighbours: {
      north: "Chins Fire",
      west: null,
      east: null,
      south: "Thuruk's Beard",
    },
  },

  //sixth row
  "Cloudbase SW": {
    race: "Argon",
    coords: [5, 0],
    neighbours: {
      north: "Red Light",
      west: null,
      east: "Ore Belt",
      south: "Emperor Mines",
    },
  },
  "Ore Belt": {
    race: "Argon",
    coords: [5, 1],
    neighbours: {
      north: "Light Home",
      west: "Cloudbase SW",
      east: "Cloudbase SE",
      south: null,
    },
  },
  "Cloudbase SE": {
    race: "Argon",
    coords: [5, 2],
    neighbours: {
      north: "President's End",
      west: "Ore Belt",
      east: null,
      south: null,
    },
  },
  "Xenon Sys. 5": {
    race: "Xenon",
    coords: [5, 3],
    neighbours: {
      north: "Xenon Sys. 3",
      west: null,
      east: "Xenon Sys. 6",
      south: "Priest's Pity",
    },
  },
  "Xenon Sys. 6": {
    race: "Xenon",
    coords: [5, 4],
    neighbours: {
      north: "Xenon Sys. 4",
      west: "Xenon Sys. 5",
      east: null,
      south: "Xenon Sys. 7",
    },
  },
  "Company Pride": {
    race: "Teladi",
    coords: [5, 5],
    neighbours: {
      north: "Ceo's Sprite",
      west: null,
      east: "Thuruk's Beard",
      south: null,
    },
  },
  "Thuruk's Beard": {
    race: "Split",
    coords: [5, 6],
    neighbours: {
      north: "Family Chins",
      west: "Company Pride",
      east: null,
      south: "Xenon Sys. 9",
    },
  },

  //seventh row
  "Emperor Mines": {
    race: "Paranid",
    coords: [6, 0],
    neighbours: {
      north: "Cloudbase SW",
      west: null,
      east: "Paranid Prime",
      south: null,
    },
  },
  "Paranid Prime": {
    race: "Paranid",
    coords: [6, 1],
    neighbours: {
      north: null,
      west: "Emperor Mines",
      east: "Priest Rings",
      south: "Empire's Edge",
    },
  },
  "Priest Rings": {
    race: "Paranid",
    coords: [6, 2],
    neighbours: {
      north: null,
      west: "Paranid Prime",
      east: "Priest's Pity",
      south: "Duke's Domain",
    },
  },
  "Priest's Pity": {
    race: "Paranid",
    coords: [6, 3],
    neighbours: {
      north: "Xenon Sys. 5",
      west: "Priest Rings",
      east: "Xenon Sys. 7",
      south: "Emperor's Ridge",
    },
  },
  "Xenon Sys. 7": {
    race: "Xenon",
    coords: [6, 4],
    neighbours: {
      north: "Xenon Sys. 6",
      west: null,
      east: "Xenon Sys. 8",
      south: null,
    },
  },
  "Xenon Sys. 8": {
    race: "Xenon",
    coords: [6, 5],
    neighbours: {
      north: null,
      west: "Xenon Sys. 7",
      east: "Xenon Sys. 9",
      south: null,
    },
  },
  "Xenon Sys. 9": {
    race: "Xenon",
    coords: [6, 6],
    neighbours: {
      north: "Thuruk's Beard",
      west: "Xenon Sys. 8",
      east: null,
      south: null,
    },
  },

  //eight row
  "Empire's Edge": {
    race: "Paranid",
    coords: [7, 1],
    neighbours: {
      north: "Paranid Prime",
      west: null,
      east: "Duke's Domain",
      south: null,
    },
  },
  "Duke's Domain": {
    race: "Paranid",
    coords: [7, 2],
    neighbours: {
      north: "Priest Rings",
      west: "Empire's Edge",
      east: "Emperor's Ridge",
      south: null,
    },
  },
  "Emperor's Ridge": {
    race: "Paranid",
    coords: [7, 3],
    neighbours: {
      north: "Priest's Pity",
      west: "Duke's Domain",
      east: null,
      south: null,
    },
  },
};

export { systems, allSystems };
