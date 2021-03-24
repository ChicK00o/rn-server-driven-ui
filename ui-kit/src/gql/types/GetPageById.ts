/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PageType, ComponentType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetPageById
// ====================================================

export interface GetPageById_pageById_components {
  __typename: "Component";
  type: ComponentType;
}

export interface GetPageById_pageById {
  __typename: "Page";
  id: PageType;
  components: GetPageById_pageById_components[];
}

export interface GetPageById {
  pageById: GetPageById_pageById | null;
}

export interface GetPageByIdVariables {
  id: PageType;
}
