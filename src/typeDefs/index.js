const { gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    email: String!
    firstName: String
    id: ID!
    lastName: String
  }

  input UserInput {
    email: String!
    firstName: String
    lastName: String
  }

  type Query {
    currentUser: User!
  }

  type Mutation {
    register(user: UserInput!): User!
  }
`

module.exports = typeDefs
