import jwt from 'jsonwebtoken'
import { graphql, buildSchema } from 'graphql'

import { getUsers, getUserById, signUp, login } from './user'
import { createPost, getPosts, findPostsByUserId } from './post'

/*
  buildSchema allows us to define (using GraphQL - the query language itself)
  through types what kind of queries we can allow to be requested - or a 'schema'.
  In this case, we create a query with the name hello that will respond with a string.
*/

const schema = buildSchema(`
  type User {
    userName: String
    email: String
    password: String
  }
  input UserInput {
    userName: String
    email: String
    password: String
  }
  type Post {
    userId: ID
    title: String
  }
  type Auth {
    user: User
    token: String
  }
  type Query {
    getUsers: [User]
    getUserById(id: ID): User
    getPosts: [Post]
    findPostsByUserId(userId: ID): [Post]
  }
  type Mutation {
    login(email: String, password: String): Auth
    createPost(userId: ID!, title: String!): Post
    signUp(user: UserInput): Auth
  }
`);

const root = {
  getUsers,
  getUserById,
  createPost,
  getPosts,
  findPostsByUserId,
  signUp,
  login,
}


export default async (req, res) => {
  const { query, variables } = req.body
  const context = {}
  const response = await graphql(schema, query, root, context, variables)

  return res.end(JSON.stringify(response));
};