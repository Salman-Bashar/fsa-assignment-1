/**
 * This function takes a string and returns the number of letters
 *
 * @param {string} stringValue
 * @returns {number}
 */
export const countLetter = (stringValue) => {
  return stringValue.replace(/[^a-z]/gi, "").length
}
