/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PageType, ComponentType } from "./../../../types/globalTypes";

// ====================================================
// GraphQL query operation: GetPage
// ====================================================

export interface GetPage_page1_components {
  __typename: "Component";
  type: ComponentType;
}

export interface GetPage_page1 {
  __typename: "Page";
  id: PageType;
  components: GetPage_page1_components[];
}

export interface GetPage_page2_components {
  __typename: "Component";
  type: ComponentType;
}

export interface GetPage_page2 {
  __typename: "Page";
  id: PageType;
  components: GetPage_page2_components[];
}

export interface GetPage {
  page1: GetPage_page1 | null;
  page2: GetPage_page2 | null;
}
