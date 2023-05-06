export const SET_CURRENCY_LIST = "SET_CURRENCY_LIST";
export const SET_EXCHANGE_DATA = "SET_EXCHANGE_DATA";
export const UPDATE_EXCHANGE_DATA = "UPDATE_EXCHANGE_DATA";

export interface SetCurrencyListAction {
  type: typeof SET_CURRENCY_LIST;
  payload: { id: string; explain: string }[];
}

export interface SetExchangeDataAction {
  type: typeof SET_EXCHANGE_DATA;
  payload: ExchangeDto;
}

export interface UpdateExchangeData {
  type: typeof UPDATE_EXCHANGE_DATA;
  payload: ExchangeDto;
}

export type HomeActionTypes =
  | SetCurrencyListAction
  | SetExchangeDataAction
  | UpdateExchangeData;

export interface CurrencyDto {
  id: string;
  explain?: string;
}
export interface ExchangeDto {
  date: string;
  currency: string;
}
