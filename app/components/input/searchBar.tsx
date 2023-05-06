import { useDispatch, useSelector } from "react-redux";
import {
  currenciesSelected,
  resetOptions,
  updateFromCurrency,
  updateOptions,
  updateSelectOption,
  updateToCurrency,
} from "src/redux/actions/search-bar.action";
import { CurrencyDto } from "src/redux/types/index/index.type";
import { AppStore } from "src/redux/types/types";

export default function SearchBar() {
  const dispatch = useDispatch();
  const { fromCurrency, toCurrency, options, selectOption } = useSelector(
    (state: AppStore) => state.searchBar
  );
  const { currencyList } = useSelector((state: AppStore) => state.home);

  const handleInputFromCurrencyChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value.toLowerCase();
    dispatch(updateFromCurrency(value.toUpperCase()));

    const filteredOptions = currencyList.filter((item) =>
      item.id.toLowerCase().includes(value)
    );

    dispatch(updateSelectOption("fromCurrency"));
    dispatch(updateOptions(filteredOptions));
  };

  const handleInputToCurrencyChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value.toLowerCase();
    dispatch(updateToCurrency(value.toUpperCase()));

    const filteredOptions = currencyList.filter((item) =>
      item.id.toLowerCase().includes(value)
    );

    dispatch(updateSelectOption("toCurrency"));
    dispatch(updateOptions(filteredOptions));
  };

  const handleOptionClick = (option: CurrencyDto) => {
    if (selectOption === "fromCurrency") {
      dispatch(updateFromCurrency(option.id.toUpperCase()));
    } else {
      dispatch(updateToCurrency(option.id.toUpperCase()));
    }
    dispatch(resetOptions());
    dispatch(currenciesSelected());
  };

  return (
    <div>
      <div className="flex items-center border-b border-b-2 border-blue-500 py-2 px-2">
        <input
          type="text"
          value={fromCurrency}
          onChange={handleInputFromCurrencyChange}
          placeholder="화폐"
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
        <input
          type="text"
          value={toCurrency}
          onChange={handleInputToCurrencyChange}
          placeholder="대상 화폐"
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
      </div>
      {options.length > 0 && (
        <ul className="bg-white rounded w-full border border-gray-300">
          {options.map((option: CurrencyDto, key: number) => (
            <li
              key={`currency_list_${key}`}
              className="px-2 py-1 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {`${option.id.toUpperCase()} : ${option.explain || option.id}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
