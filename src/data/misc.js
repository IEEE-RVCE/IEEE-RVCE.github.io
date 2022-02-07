//@ts-check
/** Hostname link for API requests */
export const hostname = "https://ieee.devcoffee.me";
/** Image source links */
export const imagePath = "/assets/images";

/**
 * Template function to add imagepath to string (Beginning slash added automatically)
 * Eg. imgify\`x\` will result in imagePath+'x'
 * @param {TemplateStringsArray} x
 */
export function imgify(x) {
  // dont put slash ifn't needed
  const optionalSlash = x[0][0] === "/" ? "" : "/";
  // join up x and add everything in
  return imagePath + optionalSlash + x.join("");
}
