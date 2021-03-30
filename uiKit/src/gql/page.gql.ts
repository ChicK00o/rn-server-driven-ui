// users.gql.ts
import { gql } from '@apollo/client';
export const GET_PAGE = gql`
  query GetPageByName($name: String) {
    getPage(pageName: $name) {
      ...data
      children {
        ...data
        children {
          ...data
          children {
            ...data
            children {
              ...data
              children {
                ...data
                children {
                  ...data
                  children {
                    ...data
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  fragment data on Component {
    type
    query
    properties {
      __typename
      ... on PageProperties {
        name
      }
      ... on CardProperties {
        cardAlignment
      }
      ... on TextProperties {
        textHeader
        textSubheader
        collapsible
      }
      ... on TickerProperties {
        tickerLabel
        tickerText
        frequency
      }
      ... on ButtonProperties {
        buttonText
        buttonLabel
      }
      ... on FormInputProperties {
        inputType
      }
      ... on FormDropDownProperties {
        options
      }
      ... on FormSubmitProperties {
        submitLabel
      }
      ... on FormProperties {
        formName
      }
      ... on TableProperties {
        tableName
      }
    }
  }
`;
