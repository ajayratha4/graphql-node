module.exports = `
  type Token {
    token: String!
  }
  type User {
    userId: ID!
    id: Int!
    title: String!
    completed: Boolean!
  }
  extend type Query {
    users: [User!]
    user(id: ID!): User
    me: User
  }
  extend type Mutation {
    signUp(username: String!, email: String!, password: String!): Token!

    signIn(login: String!, password: String!): Token!
    updateUser(username: String!): User!
    deleteUser(id: ID!): Boolean!
  }
`;
