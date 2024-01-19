import { gql } from 'apollo-server';

export const apiFilterTypeDefs = gql`
  input ApiFiltersInputs {
    _sort: String
    _order: ApiFilterOrder
    _start: Int
    _limit: Int
  }
  enum ApiFilterOrder {
    ASC
    DESC
  }
`;
