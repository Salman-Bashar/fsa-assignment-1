/**
 * This function receives two integers as parameters and returns a random number between these two integers
 *
 * @param {number} start
 * @param {number} end
 * @returns number
 */
export const generateRandomNumber = (start, end) => {
  return parseInt(Math.random() * (end - start) + start)
}
