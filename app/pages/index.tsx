import SearchBar from "components/input/searchBar";
import { fetchData } from "modules/api.module";
import { GetServerSideProps } from "next";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrencyList,
  setExchangeData,
} from "src/redux/actions/index.action";
import { ExchangeDto } from "src/redux/types/index/index.type";
import { AppStore } from "src/redux/types/types";

interface IProps {
  currencyList: { [key: string]: string };
  data: ExchangeDto;
}

export default function HomeExchangeView(props: IProps) {
  const dispatch = useDispatch();
  const { exchangeData } = useSelector((state: AppStore) => state.home);
  const { toCurrency, fromCurrency } = useSelector(
    (state: AppStore) => state.searchBar
  );
  const [rate, setRate] = useState<number>(0);

  useEffect(() => {
    const currencyList = Object.entries(props.currencyList).map(
      ([key, value]) => ({
        id: key,
        explain: value,
      })
    );

    dispatch(setCurrencyList(currencyList));
    dispatch(setExchangeData(props.data));
  }, []);

  const handleRateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // 숫자만 허용하고 그렇지 않으면 false를 반환합니다.
    if (!/^\d*\.?\d*$/.test(inputValue)) {
      return false;
    }

    setRate(+inputValue);
  };

  return (
    <div>
      <SearchBar />
      <p>기준 : {exchangeData.date}</p>
      <p>
        환율 : 1{fromCurrency} = {exchangeData[toCurrency.toLowerCase()]}
        {toCurrency}
      </p>
      <p>환전 할 {fromCurrency}</p>
      <input type={"text"} value={rate} onChange={handleRateChange} />
      {fromCurrency}
      <br />
      <input
        type={"text"}
        value={exchangeData[toCurrency.toLowerCase()] * rate}
        readOnly
      />
      {toCurrency}
    </div>
  );
}

//SSR 서버로부터 랜더링 전 currency List와 기본KRW, USD의 환율을 받아옴
export const getServerSideProps: GetServerSideProps = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const [currencyList, data] = await Promise.all([
    fetchData(`${apiUrl}/latest/currencies.json`),
    fetchData(`${apiUrl}/latest/currencies/krw/usd.json`),
  ]);

  return { props: { data, currencyList } };
};
