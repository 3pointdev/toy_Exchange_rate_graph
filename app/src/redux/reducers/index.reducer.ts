import {
  CurrencyDto,
  ExchangeDto,
  HomeActionTypes,
  SET_CURRENCY_LIST,
  SET_EXCHANGE_DATA,
  UPDATE_EXCHANGE_DATA,
} from "../types/index/index.type";

interface HomeState {
  currencyList: CurrencyDto[];
  exchangeData: ExchangeDto;
}

const initialState: HomeState = {
  currencyList: [],
  exchangeData: { date: "", currency: "" },
};

export const homeReducer = (
  state = initialState,
  action: HomeActionTypes
): HomeState => {
  switch (action.type) {
    case SET_CURRENCY_LIST:
      return { ...state, currencyList: action.payload };
    case SET_EXCHANGE_DATA:
      return { ...state, exchangeData: action.payload };
    case UPDATE_EXCHANGE_DATA:
      return {
        ...state,
        exchangeData: action.payload,
      };
    default:
      return state;
  }
};
