import express from "express"
import { handleGenerateRandomNumber } from "./middleware/handle-generate-random-number.js"

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`)
})

/**
 * Generate Random Number
 */
app.get("/api/v1/generate-random-number", (req, res) => {
  handleGenerateRandomNumber(req, res)
})
