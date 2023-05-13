import { generateRandomNumber } from "../generate-random-number.js"

export const handleRandomNumberGenerator = (req, res) => {
  try {
    let startNumber, endNumber, result

    if (req.query.start != undefined) {
      startNumber = parseInt(req.query.start)
    }

    if (req.query.end != undefined) {
      endNumber = parseInt(req.query.end)
    }

    if (req.query.start != undefined && req.query.end != undefined) {
      result = generateRandomNumber(startNumber, endNumber)

      res.json(
        `A random number between ${startNumber} & ${endNumber} is ${result}`
      )
    } else {
      res.json(`Please provide two numbers`)
    }
  } catch {
    res
      .status(422)
      .json("Invalid Query Param! Please try again with valid params.")
  }
}
