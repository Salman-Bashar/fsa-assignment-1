import express from "express"
import { handleRandomNumberGenerator } from "./middleware/handle-random-number-generator.js"
import { handleFakePersonGenerator } from "./middleware/handle-fake-person-generator.js"
import { handleStringStatsCounter } from "./middleware/handle-string-stats-counter.js"

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`)
})

/**
 * Generate Random Number
 */
app.get("/api/v1/generate-random-number", (req, res) => {
  handleRandomNumberGenerator(req, res)
})

/**
 * Generate Fake Person
 */
app.get("/api/v1/generate-fake-person", (req, res) => {
  handleFakePersonGenerator(req, res)
})

/**
 * Count AString Stats
 */
app.get("/api/v1/count-string-stats", (req, res) => {
  handleStringStatsCounter(req, res)
})
