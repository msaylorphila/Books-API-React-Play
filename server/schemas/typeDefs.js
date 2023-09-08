const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    userename: String
    email: String
    bookCount: Int
    savedBooks: [Book]!
  }
  
  type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }
  
  type Auth {
    token: ID!
    user: User
  }
  
  type: Query {
    users: [User]!
    user(userId: ID!): User
    me: User
  }
`