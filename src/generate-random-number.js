/**
 *
 * @param {number} start
 * @param {number} end
 * @returns number
 * @description This function receives two integers as parameters and returns a random number between these two integers
 */
export const generateRandomNumber = (start, end) => {
  return parseInt(Math.random() * (end - start) + start)
}
