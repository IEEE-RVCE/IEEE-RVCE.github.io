export const exchangeRate = 83;
/**
 * Membership costs. Cost is by default 0, notes by default is taken as empty.
 * Every Year IEEE decides a fixed doller exchange rate. This year(2023) it is 1 $= 77 rupees. we take it and convert it to INR, contact MDC Chair for more details.
 * @type {{name:string,cost?:number,discountedCost?:number,notes?:string}[]}
 */

//newCost ===> membership cost for new members
//renewalCost ===> membership cost for membership renewal

export const costs = [
  {
    name: 'Student Membership',
    newCost: 1372,
    renewalCost: 1372,
    // discountedCost: 27 / 2,
    //notes: "FUTURE50 (50% off)",
    notes: 'Valid till Dec 31st',
  },

  {
    name: 'Antennas and Propagation Society (APS)',
    newCost: 93,
    renewalCost: 93,
  },

  { name: 'Circuits and Systems (CAS)', newCost: 0, renewalCost: 0 },

  { name: 'Communications Society', newCost: 47.5, renewalCost: 47.5 },

  {
    name: 'Computer Society',
    newCost: 392,
    renewalCost: 392,
    // discountedCost: 4,
    // notes: "CS202250 (50% off)",
  },

  {
    name: 'Power & Energy Society (PES)',
    newCost: 47.5,
    renewalCost: 47.5,
    // discountedCost: 0,
    // notes: 'Free for new members!',
  },

  { name: 'Robotics and Automation (RAS)', newCost: 465, renewalCost: 465 },

  { name: 'Signal Processing Society (SPS)', newCost: 47.5, renewalCost: 47.5 },
  
  { name: 'Sensors Council', newCost: 0, renewalCost: 0 },
  
  { name: 'SIGHT', newCost: 0, renewalCost: 0 },

  { name: 'Women in Engineering (WIE)', newCost: 0, renewalCost: 0 },
];
