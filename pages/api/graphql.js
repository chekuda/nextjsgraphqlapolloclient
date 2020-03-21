import { graphql, buildSchema } from 'graphql'

import { getUsers, getUserById } from './user'
import { createPost, getPosts, findPostsByUserId } from './post'

/*
  buildSchema allows us to define (using GraphQL - the query language itself)
  through types what kind of queries we can allow to be requested - or a 'schema'.
  In this case, we create a query with the name hello that will respond with a string.
*/

const schema = buildSchema(`
  type User {
    name: String
    surname: String
  }
  type Post {
    userId: ID
    title: String
  }
  type Query {
    getUsers: [User]
    getUserById(id: ID): User
    getPosts: [Post]
    findPostsByUserId(userId: ID): [Post]
  }
  type Mutation {
    createPost(userId: ID!, title: String!): Post
}
`);

const root = {
  getUsers,
  getUserById,
  createPost,
  getPosts,
  findPostsByUserId
}

export default async (req, res) => {
  const query = req.body.query;
  const response = await graphql(schema, query, root);

  return res.end(JSON.stringify(response));
};