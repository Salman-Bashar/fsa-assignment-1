/**
 * This function takes a string and returns the number of symbols
 *
 * @param {string} stringValue
 * @returns {number}
 */
export const countSymbols = (stringValue) => {
  return stringValue.replace(/[a-z0-9]/gi, "").length
}
