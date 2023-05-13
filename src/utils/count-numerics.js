/**
 * This function takes a string and returns the number of numeric characters
 *
 * @param {string} stringValue
 * @returns {number}
 */
export const countNumerics = (stringValue) => {
  return stringValue.replace(/[^0-9]/g, "").length
}
