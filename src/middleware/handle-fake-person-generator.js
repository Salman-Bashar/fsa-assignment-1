import { generateFakePerson } from "../generate-fake-person.js"

export const handleFakePersonGenerator = (req, res) => {
  try {
    let age

    const firstName = req.query.firstName

    const lastName = req.query.lastName

    const email = req.query.email

    const avatar = req.query.avatar

    const address = req.query.address

    if (req.query.age != undefined && req.query.age > 0) {
      age = parseInt(req.query.age)
    }

    const result = generateFakePerson(
      firstName,
      lastName,
      email,
      avatar,
      age,
      address
    )

    res.json(result)
  } catch {
    res
      .status(422)
      .json("Invalid Query Param! Please try again with valid params.")
  }
}
