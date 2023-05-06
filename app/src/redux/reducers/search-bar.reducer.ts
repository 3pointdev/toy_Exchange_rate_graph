import {
  RESET_OPTIONS,
  SearchBarActionTypes,
  UPDATE_FROM_CURRENCY,
  UPDATE_OPTIONS,
  UPDATE_SELECT_OPTION,
  UPDATE_TO_CURRENCY,
} from "src/redux/types/search-bar/search-bar.type";
import { CurrencyDto } from "../types/index/index.type";

interface SearchBarState {
  fromCurrency: string;
  toCurrency: string;
  options: CurrencyDto[];
  selectOption: string;
}

const initialState: SearchBarState = {
  fromCurrency: "KRW",
  toCurrency: "USD",
  options: [],
  selectOption: "",
};

export const searchBarReducer = (
  state = initialState,
  action: SearchBarActionTypes
): SearchBarState => {
  switch (action.type) {
    case UPDATE_FROM_CURRENCY:
      return { ...state, fromCurrency: action.payload };
    case UPDATE_TO_CURRENCY:
      return { ...state, toCurrency: action.payload };
    case UPDATE_OPTIONS:
      return { ...state, options: action.payload };
    case UPDATE_SELECT_OPTION:
      return { ...state, selectOption: action.payload };
    case RESET_OPTIONS:
      return { ...state, options: [] };
    default:
      return state;
  }
};
