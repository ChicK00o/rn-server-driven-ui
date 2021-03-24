// users.gql.ts
import { gql } from '@apollo/client';
export const GET_PAGE = gql`
  query GetPage {
    page1: pageById(id: PAGE2) {
      id
      components {
        type
      }
    }
    
    page2: pageById(id: PAGE1) {
      id
      components {
        type
      }
    }
  }
`;
