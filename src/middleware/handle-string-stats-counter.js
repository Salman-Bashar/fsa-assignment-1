import { countStringStats } from "../count-string-stats.js"

export const handleStringStatsCounter = (req, res) => {
  try {
    const stringValue = req.query.string

    const result = countStringStats(stringValue)

    res.json(result)
  } catch {
    res
      .status(422)
      .json("Invalid Query Param! Please try again with valid params.")
  }
}
