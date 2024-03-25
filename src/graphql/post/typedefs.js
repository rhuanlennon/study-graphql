import { gql } from 'apollo-server';

export const postTypeDefs = gql`
  extend type Query {
    post(id: ID!): Post!
    posts(input: ApiFiltersInputs): [Post!]!
  }
  type Post {
    id: ID!
    title: String!
    body: String!
    indexRef: Int!
    user: User!
    createdAt: String!
  }
`;
