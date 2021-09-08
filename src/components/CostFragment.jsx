import { TableCell } from "@material-ui/core";
import { useState } from "react";
import { exchangeRate } from "../links";

/**
 *
 * @param {{cost?:number}}} param0
 * @returns
 */
export default function CostFragment({ cost }) {
  /**
   * @type {number}
   */
  const costsNumber = cost ?? 0;
  const [isDollars, setIsDollars] = useState(true);
  return (
    <TableCell onClick={()=>setIsDollars(!isDollars)} style={{userSelect:'none'}} align="right" >
      {isDollars ? "$" : "₹"}
      {isDollars ? costsNumber : costsNumber * exchangeRate}
    </TableCell>
  );
}
