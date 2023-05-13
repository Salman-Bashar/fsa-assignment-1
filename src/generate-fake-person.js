/**
 *  This functions takes some info and returns a fake person based on that info.
 *
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} email
 * @param {string} avatar
 * @param {number} age
 * @param {string} address
 * @returns object
 */
export const generateFakePerson = (
  firstName,
  lastName,
  email,
  avatar,
  age,
  address
) => {
  const personData = {
    "First Name": firstName,
    "Last Name": lastName,
    Email: email,
    Avatar: avatar,
    Age: age,
    Address: address,
  }
  return personData
}
