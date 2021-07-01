import { gql } from "@apollo/client";

export const GET_ALL_TODOS = gql`
  query Todos($username: String!) {
    todos(username: $username) {
      username
      _id
      todo {
        completed
        title
        _id
      }
    }
  }
`;
