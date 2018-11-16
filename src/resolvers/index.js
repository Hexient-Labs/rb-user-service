const { createUser } = require('../lib/factories/user')

const resolvers = {
  Mutation: {
    register: (p, { user }) => createUser(user)
  },
  Query: {
    currentUser: () => createUser()
  }
}

module.exports = resolvers
