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
    newCost: 703,
    renewalCost: 1405,
    // discountedCost: 27 / 2,
    //notes: "FUTURE50 (50% off)",
    notes: 'Valid till Dec 31st',
  },

  {
    name: ' Aerospace and Electronic Systems Society(AESS))',
    newCost: 120,
    renewalCost: 251,
  },

  {
    name: 'Antennas and Propagation Society (APS)',
    newCost: 49,
    renewalCost: 51,
  },

  { name: 'Circuits and Systems (CAS)', newCost: 0, renewalCost: 552 },

  { name: 'Communications Society(ComSoc)', newCost: 24, renewalCost: 51 },

  {
    name: 'Computer Society(CompSoc)',
    newCost: 201,
    renewalCost: 402,
    // discountedCost: 4,
    // notes: "CS202250 (50% off)",
  },

  {
    name: 'Microwave Theory and Technology Society(MTTS)',
    newCost: 49,
    renewalCost: 51,
    // discountedCost: 0,
    // notes: 'Free for new members!',
  },

  { name: 'Power and Energy Society(PES)', newCost: 24, renewalCost: 51 },

  { name: ' Robotics and Automation Society(RAS)', newCost: 239, renewalCost: 251 },

  { name: 'Signal Processing Society(SPS)', newCost: 24, renewalCost: 51 },

  { name: '  Affinity Group-SIGHT', newCost: 0, renewalCost: 0 },

  { name: 'Affinity Group-Women in Engineering(WIE)', newCost: 0, renewalCost: 0 },
];
