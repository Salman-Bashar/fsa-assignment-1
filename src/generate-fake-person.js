import { faker } from "@faker-js/faker"

/**
 *  This functions takes an array of properties and returns a fake person based on those properties.
 *
 * @param {Array} selectedPropsArray
 * @returns object
 */
export const generateFakePerson = (selectedPropsArray) => {
  const fakePerson = {
    "First Name": selectedPropsArray.includes("firstName")
      ? faker.person.firstName()
      : undefined,
    "Last Name": selectedPropsArray.includes("lastName")
      ? faker.person.lastName()
      : undefined,
    Email: selectedPropsArray.includes("email")
      ? faker.internet.email()
      : undefined,
    Avatar: selectedPropsArray.includes("avatar")
      ? faker.image.avatar()
      : undefined,
    Age: selectedPropsArray.includes("age")
      ? faker.number.int({ min: 1, max: 100 })
      : undefined,
    Address: selectedPropsArray.includes("address")
      ? faker.location.street({ useFullAddress: true }) +
        ", " +
        faker.location.city()
      : undefined,
  }

  return fakePerson
}
