import axios from "axios";
import { RootState } from "../store/store";
import { CurrencyDto, UPDATE_EXCHANGE_DATA } from "../types/index/index.type";
import {
  RESET_OPTIONS,
  UPDATE_FROM_CURRENCY,
  UPDATE_OPTIONS,
  UPDATE_SELECT_OPTION,
  UPDATE_TO_CURRENCY,
} from "../types/search-bar/search-bar.type";

export const updateFromCurrency = (value: string) => ({
  type: UPDATE_FROM_CURRENCY,
  payload: value,
});

export const updateToCurrency = (value: string) => ({
  type: UPDATE_TO_CURRENCY,
  payload: value,
});

export const updateOptions = (options: CurrencyDto[]) => ({
  type: UPDATE_OPTIONS,
  payload: options,
});

export const updateSelectOption = (selectOption: string) => ({
  type: UPDATE_SELECT_OPTION,
  payload: selectOption,
});

export const resetOptions = () => ({
  type: RESET_OPTIONS,
});

export const updateExchangeData = (exchangeData: any) => ({
  type: UPDATE_EXCHANGE_DATA,
  payload: exchangeData,
});

export const currenciesSelected =
  () => async (dispatch: any, getState: () => RootState) => {
    const { fromCurrency, toCurrency } = getState().searchBar;
    if (fromCurrency && toCurrency) {
      try {
        const response = await axios.get(
          `${
            process.env.NEXT_PUBLIC_API_URL
          }/latest/currencies/${fromCurrency.toLowerCase()}/${toCurrency.toLowerCase()}.json`
        );
        dispatch(updateExchangeData(response.data));
      } catch (error) {
        console.error("Failed to fetch exchange data:", error);
      }
    }
  };
