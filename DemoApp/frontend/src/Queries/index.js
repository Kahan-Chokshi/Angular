import { gql } from 'apollo-boost';

export const GET_USERS = gql`
  {
    getUsers {
      id,
      name,
      email,
      password
    }
  }
`;

export const VIEW_USERS = gql`
  query ($id: Int){
    getUserInfo(id: $id) {
      id,
      name,
      email,
      password
    }
  }
`;

export const ADD_USER = gql`
    mutation($name: String, $email: String, $password: String) {
    createUser (name: $name, email: $email, password: $password)
  }
`;

export const EDIT_USER = gql`
  mutation($id: Int, $name: String, $email: String, $password: String) {
    updateUserInfo (id: $id, name: $name, email: $email, password: $password)
  }
`;

export const DELETE_USER = gql`
  mutation($id: Int) {
    deleteUser(id: $id)
  }
`
