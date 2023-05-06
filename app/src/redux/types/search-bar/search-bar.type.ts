import { CurrencyDto } from "../index/index.type";

export const UPDATE_FROM_CURRENCY = "UPDATE_FROM_CURRENCY";
export const UPDATE_TO_CURRENCY = "UPDATE_TO_CURRENCY";
export const UPDATE_OPTIONS = "UPDATE_OPTIONS";
export const UPDATE_SELECT_OPTION = "UPDATE_SELECT_OPTION";
export const RESET_OPTIONS = "RESET_OPTIONS";
export const CURRENCIES_SELECTED = "CURRENCIES_SELECTED";

export interface UpdateFromCurrencyAction {
  type: typeof UPDATE_FROM_CURRENCY;
  payload: string;
}

export interface UpdateToCurrencyAction {
  type: typeof UPDATE_TO_CURRENCY;
  payload: string;
}

export interface UpdateOptionsAction {
  type: typeof UPDATE_OPTIONS;
  payload: CurrencyDto[];
}

export interface UpdateSelectOptionAction {
  type: typeof UPDATE_SELECT_OPTION;
  payload: string;
}

export interface ResetOptionsAction {
  type: typeof RESET_OPTIONS;
}

export interface CurrenciesSelected {
  type: typeof CURRENCIES_SELECTED;
}

export type SearchBarActionTypes =
  | UpdateFromCurrencyAction
  | UpdateToCurrencyAction
  | UpdateOptionsAction
  | UpdateSelectOptionAction
  | ResetOptionsAction
  | CurrenciesSelected;
