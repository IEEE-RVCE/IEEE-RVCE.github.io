export const exchangeRate = 77;
/**
 * Membership costs. Cost is by default 0, notes by default is taken as empty.
 * Every Year IEEE decides a fixed doller exchange rate. This year(2023) it is 1 $= 77 rupees. we take it and convert it to INR, contact MDC Chair for more details.
 * @type {{name:string,cost?:number,discountedCost?:number,notes?:string}[]}
 */

export const costs = [
  {
    name: 'Student Membership',
    cost: 14,
    // discountedCost: 27 / 2,
    //notes: "FUTURE50 (50% off)",
  },

  {
    name: 'Antennas and Propagation Society (APS)',
    cost: 8,
  },

  { name: 'Circuits and Systems (CAS)', cost: 11 },

  { name: 'Communications Society', cost: 0.5 },

  {
    name: 'Computer Society',
    cost: 4,
    // discountedCost: 4,
    // notes: "CS202250 (50% off)",
  },

  {
    name: 'Power & Energy Society (PES)',
    cost: 7.5,
    // discountedCost: 0,
    notes: 'Free for first year!',
  },

  { name: 'Robotics and Automation (RAS)', cost: 5 },

  { name: 'Sensor Council', cost: 0 },

  { name: 'Signal Processing Society (SPS)', cost: 0.5 },

  { name: 'SIGHT', cost: 0 },

  { name: 'Women in Engineering (WIE)', cost: 0 },
];
