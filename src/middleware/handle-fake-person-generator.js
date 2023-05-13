import { generateFakePerson } from "../generate-fake-person.js"

export const handleFakePersonGenerator = (req, res) => {
  try {
    const selectedProps = req.query.props
    const selectedPropsArray = selectedProps.split(",")
    res.json(generateFakePerson(selectedPropsArray))
  } catch {
    res
      .status(422)
      .json("Invalid Query Param! Please try again with valid params.")
  }
}
