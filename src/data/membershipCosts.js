export const exchangeRate = 1;
/**
 * Membership costs. Cost is by default 0, notes by default is taken as empty.
 * @type {{name:string,cost?:number,discountedCost?:number,notes?:string}[]}
 */

export const costs = [
  {
    name: "Student Membership",
    cost: 1078,
   // discountedCost: 27 / 2,
    //notes: "FUTURE50 (50% off)",
  },

  {
    name: "Antennas and Propagation Society (APS)",
    cost: 616,
  },

  { name: "Circuits and Systems (CAS)", cost: 847 },

  { name: "Communications Society", cost: 38.5 },

  {
    name: "Computer Society",
    cost: 308,
    // discountedCost: 4,
   // notes: "CS202250 (50% off)",
  },

  {
    name: "Power & Energy Society (PES)",
    cost: 577.5,
    // discountedCost: 0,
    notes: "Free for first year!",
  },

  { name: "Robotics and Automation (RAS)", cost: 385 },

  { name: "Sensor Council", cost: 0 },

  { name: "Signal Processing Society (SPS)", cost: 38.5 },

  { name: "SIGHT", cost: 0 },

  { name: "Women in Engineering (WIE)", cost: 0 },
];
