import axios, { AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";
import { SearchBar } from "components/input/searchBar";
import { ApiModule } from "modules/api.module";
import moment from "moment";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { ExchangeDto } from "src/dto/exchange/exchange.dto";

/**
 * 메인페이지 - 환율정보
 */
export default function HomeExchangeView({ currencyList }): ReactElement {
  const [exchangeHistory, setExchangeHistory] = useState<ExchangeDto>(
    new ExchangeDto()
  );

  const router = useRouter();
  useEffect(() => {
    const getData = async () => {
      const onWeekAgo = moment(
        new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000)
      ).format("YYYY-MM-DD");

      await ApiModule.get(
        `/timeframe?start_date=${onWeekAgo}&end_date=2023-05-05&source=KRW&currencies=USD`
      ).then((result: AxiosResponse<ExchangeDto>) => {
        setExchangeHistory(plainToInstance(ExchangeDto, result.data));
      });
    };
    getData();
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/list`, {
        headers: { apiKey: process.env.NEXT_PUBLIC_API_KEY },
      })
      .then((result) => console.log(result));
  }, []);

  console.log(exchangeHistory, currencyList);

  return (
    <div>
      <SearchBar onSearch={null} list={[]} />
      {/* <ExchangeRate data={} /> */}
    </div>
  );
}
// //SSR 서버로부터 랜더링 전 Post List를 받아옴
// export const getServerSideProps: GetServerSideProps = async () => {
//   const apiUrl = process.env.NEXT_PUBLIC_API_URL;
//   const apiKey = process.env.NEXT_PUBLIC_API_KEY;
//   const result = await axios.get(`${apiUrl}/list`, {
//     headers: { apiKey: apiKey },
//   });

//   const currencyList = result.data;

//   return { props: { currencyList } };
// };
