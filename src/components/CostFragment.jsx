//@ts-check
import { TableCell } from "@material-ui/core";
import { useState } from "react";
import { exchangeRate } from "../links";

/**
 * Cost Fragment
 * @param {{cost?:number,discountedCost?:number}} param0 props
 * @returns
 */
export default function CostFragment({ cost, discountedCost }) {
  const costsNumber = cost ?? 0;
  // if discountedPrice is undefined, then we show a struck out price
  const isNotDiscounted = typeof discountedCost === "undefined";
  const [isDollars, setIsDollars] = useState(false);

  return (
    <TableCell
      onClick={() => setIsDollars(!isDollars)}
      style={{ userSelect: "none" }}
      align="right"
    >
      {isNotDiscounted ? (
        <span>
          {isDollars ? "$" + costsNumber : "₹" + costsNumber * exchangeRate}
        </span>
      ) : (
        <><del >
          {isDollars ? "$" + costsNumber : "₹" + costsNumber * exchangeRate}
        </del>&nbsp;{isDollars ? "$" + discountedCost : "₹" + discountedCost * exchangeRate}</>
      )}
    </TableCell>
  );
}