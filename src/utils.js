/**
 * Converts date values in an object to UTC, based on list of keys provided
 * @param {*} object Input object to process
 * @param {*} keys Keys that have date values in object
 * @returns New object with the values of the keys converted to UTC
 */
export function convertDatesinValuestoUTC(object, keys) {
    const result = { ...object };
    keys.forEach((key) => {
        if (result[key]) {
            result[key] = new Date(result[key]).toISOString();
        }
    });
    return result;
}