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
    name: ' Aerospace and Electronic Systems Society(AESS))',
    newCost: 465,
    renewalCost: 465,
  },

  {
    name: 'Antennas and Propagation Society (APS)',
    newCost: 93,
    renewalCost: 93,
  },

  { name: 'Circuits and Systems (CAS)', newCost: 0, renewalCost: 0 },

  { name: 'Communications Society(ComSoc)', newCost: 47.5, renewalCost: 47.5 },

  {
    name: 'Computer Society(CompSoc)',
    newCost: 392,
    renewalCost: 392,
    // discountedCost: 4,
    // notes: "CS202250 (50% off)",
  },

  {
    name: 'Microwave Theory and Technology Society(MTTS)',
    newCost: 93,
    renewalCost: 93,
    // discountedCost: 0,
    // notes: 'Free for new members!',
  },

  { name: 'Power and Energy Society(PES)', newCost: 47.5, renewalCost: 47.5 },

  { name: ' Robotics and Automation Society(RAS)', newCost: 465, renewalCost: 465 },

  { name: 'Signal Processing Society(SPS)', newCost: 47.5, renewalCost: 47.5 },

  { name: '  Affinity Group-SIGHT', newCost: 0, renewalCost: 0 },

  { name: 'Affinity Group-Women in Engineering(WIE)', newCost: 0, renewalCost: 0 },
];
