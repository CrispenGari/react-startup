import { gql } from "@apollo/client";

export const DELETE_TODO = gql`
  mutation deleteTodo($id: String!) {
    deleteTodo(id: $id) {
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
export const UPDATE_TODO = gql`
  mutation updateTodo($id: String!, $title: String!, $completed: Boolean!) {
    updateTodo(id: $id, title: $title, completed: $completed) {
      todo {
        completed
        title
        _id
      }
    }
  }
`;

export const CREATE_TODO = gql`
  mutation addTodo($username: String!, $title: String!, $completed: Boolean!) {
    addTodo(username: $username, title: $title, completed: $completed) {
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
