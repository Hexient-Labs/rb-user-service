const faker = require('faker')

const getEmail = () => faker.internet.email()

const getFirstName = () => faker.name.firstName()

const getId = () => faker.random.uuid()

const getLastName = () => faker.name.lastName()

const createUser = overrides => ({
  email: getEmail(),
  firstName: getFirstName(),
  id: getId(),
  lastName: getLastName(),
  ...overrides
})

module.exports = {
  createUser
}

