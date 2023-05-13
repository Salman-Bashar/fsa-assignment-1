/**
 * This function takes a string and returns an object containing the number of letters, number of symbols and number of numeric characters.
 *
 * @param {string} stringValue
 * @returns {}
 */
export const countStringStats = (stringValue) => {
  const result = {
    "Number of Letters": countLetter(stringValue),
    "Number of Symbols": countSymbols(stringValue),
    "Number of Numeric Characters": countNumbers(stringValue),
  }

  return result
}

/**
 * This function takes a string and returns the number of letters
 *
 * @param {string} stringValue
 * @returns {number}
 */
const countLetter = (stringValue) => {
  return stringValue.replace(/[^a-z]/gi, "").length
}

/**
 * This function takes a string and returns the number of symbols
 *
 * @param {string} stringValue
 * @returns {number}
 */
const countSymbols = (stringValue) => {
  return stringValue.replace(/[a-z0-9]/gi, "").length
}

/**
 * This function takes a string and returns the number of numeric characters
 *
 * @param {string} stringValue
 * @returns {number}
 */
const countNumbers = (stringValue) => {
  return stringValue.replace(/[^0-9]/g, "").length
}
