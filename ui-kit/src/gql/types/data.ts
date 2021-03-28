/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Alignment, InputType } from "./globalTypes";

// ====================================================
// GraphQL fragment: data
// ====================================================

export interface data_properties_PageProperties {
  __typename: "PageProperties";
  name: string;
}

export interface data_properties_CardProperties {
  __typename: "CardProperties";
  cardAlignment: Alignment;
}

export interface data_properties_TextProperties {
  __typename: "TextProperties";
  textHeader: string | null;
  textSubheader: string | null;
  collapsible: boolean | null;
}

export interface data_properties_TickerProperties {
  __typename: "TickerProperties";
  tickerLabel: string | null;
  tickerText: string | null;
  frequency: number;
}

export interface data_properties_ButtonProperties {
  __typename: "ButtonProperties";
  buttonText: string;
  buttonLabel: string | null;
}

export interface data_properties_FormInputProperties {
  __typename: "FormInputProperties";
  inputType: InputType;
}

export interface data_properties_FormDropDownProperties {
  __typename: "FormDropDownProperties";
  options: string[];
}

export interface data_properties_FormSubmitProperties {
  __typename: "FormSubmitProperties";
  submitLabel: string;
}

export interface data_properties_FormProperties {
  __typename: "FormProperties";
  formName: string | null;
}

export interface data_properties_TableProperties {
  __typename: "TableProperties";
  tableName: string | null;
}

export type data_properties = data_properties_PageProperties | data_properties_CardProperties | data_properties_TextProperties | data_properties_TickerProperties | data_properties_ButtonProperties | data_properties_FormInputProperties | data_properties_FormDropDownProperties | data_properties_FormSubmitProperties | data_properties_FormProperties | data_properties_TableProperties;

export interface data {
  __typename: "Component";
  type: string;
  query: string | null;
  properties: data_properties;
}
