import { countLetter } from "./utils/count-letter.js"
import { countSymbols } from "./utils/count-symbols.js"
import { countNumerics } from "./utils/count-numerics.js"

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
    "Number of Numeric Characters": countNumerics(stringValue),
  }

  return result
}
