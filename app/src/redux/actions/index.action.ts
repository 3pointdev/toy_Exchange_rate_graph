import {
  ExchangeDto,
  SET_CURRENCY_LIST,
  SET_EXCHANGE_DATA,
  SetCurrencyListAction,
  SetExchangeDataAction,
} from "../types/index/index.type";

export const setCurrencyList = (
  currencyList: { id: string; explain: string }[]
): SetCurrencyListAction => ({
  type: SET_CURRENCY_LIST,
  payload: currencyList,
});

export const setExchangeData = (
  exchangeData: ExchangeDto
): SetExchangeDataAction => ({
  type: SET_EXCHANGE_DATA,
  payload: exchangeData,
});
