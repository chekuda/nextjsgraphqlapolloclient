import { graphql, buildSchema } from 'graphql'
import { verifyToken, getCookie } from '../../lib'

import { getUsers, getUserById, signUp, login } from './user'
import { createPost, getPostsById, findPostsByUserId } from './post'

/*
  buildSchema allows us to define (using GraphQL - the query language itself)
  through types what kind of queries we can allow to be requested - or a 'schema'.
  In this case, we create a query with the name hello that will respond with a string.
*/

const schema = buildSchema(`
  type User {
    id: ID,
    userName: String
    email: String
    password: String
    type: String
    created: String
    labels: [Label]
  }
  type Label {
    name: String
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
    getPostsById: [Post]
    findPostsByUserId(userId: ID): [Post]
  }
  type Mutation {
    login(email: String, password: String): Auth
    createPost(title: String!): Post
    signUp(userName: String, email: String, password: String): Auth
  }
`);

const root = {
  getUsers,
  getUserById,
  createPost,
  getPostsById,
  findPostsByUserId,
  signUp,
  login,
}

export default async (req, res) => {
  const { query, variables } = req.body
  const token = getCookie(req.headers.cookie)
  const context = verifyToken(token) || {}

  const response = await graphql(schema, query, root, context, variables)

  return res.end(JSON.stringify(response));
}
