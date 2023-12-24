//@ts-check
import { TableCell } from '@material-ui/core';
import React, { useState } from 'react';
import { exchangeRate } from '../data/membershipCosts';

/**
 * Cost Fragment
 * @param {{cost?:number}} param0 props
 * @returns
 */
export default function CostFragment({ cost }) {
  const costsNumber = cost ?? 0;
  // if discountedPrice is undefined, then we show a struck out price
  // const isNotDiscounted = typeof discountedCost === 'undefined';
  const [isDollars, setIsDollars] = useState(false);
  const isFree = costsNumber === 0;
  // console.log(costsNumber, isFree);
  if (isFree) {
    return (
      <TableCell title="It's Free!" style={{ userSelect: 'none' }} align="right">
        <span>Free!</span>
      </TableCell>
    );
  }
  return (
    <TableCell
      title="Click to toggle currency"
      onClick={() => setIsDollars(!isDollars)}
      style={{ userSelect: 'none' }}
      align="right"
    >
      {isDollars ? '$' + Math.ceil(costsNumber/exchangeRate) : '₹' + costsNumber }
    </TableCell>
  );
}
// export default function CostFragment({ cost, discountedCost }) {
//   const costsNumber = cost ?? 0;
//   // if discountedPrice is undefined, then we show a struck out price
//   const isNotDiscounted = typeof discountedCost === 'undefined';
//   const [isDollars, setIsDollars] = useState(false);

//   return (
//     <TableCell
//       title="Click to toggle currency"
//       onClick={() => setIsDollars(!isDollars)}
//       style={{ userSelect: 'none' }}
//       align="right"
//     >
//       {isNotDiscounted ? (
//         <span>{isDollars ? '$' + costsNumber : '₹' + costsNumber * exchangeRate}</span>
//       ) : (
//         <>
//           <del>{isDollars ? '$' + costsNumber : '₹' + costsNumber * exchangeRate}</del>
//           &nbsp;
//           {isDollars ? '$' + discountedCost : '₹' + discountedCost * exchangeRate}
//         </>
//       )}
//     </TableCell>
//   );
// }
