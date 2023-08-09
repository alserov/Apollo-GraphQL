import {gql} from "@apollo/client";


export const LOAD_USERS = gql(`
  {
    getAllUsers {
      id
      firstName
      email
      password
    }
  }
`);


export const LOAD_HUNDRED = gql(`
{
   getHundredUsers {
        email
        firstName
        lastName
        password
        id
   }
 }
`)