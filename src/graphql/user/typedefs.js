import { gql } from 'apollo-server';

export const userTypeDefs = gql`
  extend type Query {
    user(id: ID!): User!
    users(input: ApiFiltersInputs): [User!]!
  }
  type User {
    id: ID!
    userName: String!
    firstName: String!
    lastName: String!
    indexRef: Int!
    createdAt: String!
    posts: [Post!]!
  }
`;
