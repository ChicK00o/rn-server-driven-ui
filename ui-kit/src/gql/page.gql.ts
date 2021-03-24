// users.gql.ts
import { gql } from '@apollo/client';
export const GET_PAGE = gql`
  query GetPageById($id: PageType!) {
    pageById(id: $id) {
      id
      components {
        type
      }
    }
  }
`;