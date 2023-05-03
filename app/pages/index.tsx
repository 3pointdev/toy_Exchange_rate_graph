import axios from "axios";
import { plainToInstance } from "class-transformer";
import { ExchangeRate } from "components/exchange/exchage-rate";
import { SearchBar } from "components/input/searchBar";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import { ExchangeDto } from "src/dto/exchange/exchange.dto";

interface IProps {
  exchangeData: ExchangeDto;
}

/**
 * 메인페이지 - 환율정보
 */
export default function HomeExchangeView({
  exchangeData,
}: IProps): ReactElement {
  const [exchange, setExchange] = useState<ExchangeDto>(
    plainToInstance(ExchangeDto, exchangeData)
  );
  const router = useRouter();

  //Scroll event
  // const handleScroll = async () => {
  //   await axios
  //     .get<PostDto[]>(`${apiUrl}/post?offset=${offset}`)
  //     .then((result: AxiosResponse<PostDto[]>) => {
  //       setPostList([
  //         ...postList,
  //         ...result.data.map((item) => plainToInstance(PostDto, item)),
  //       ]);
  //       setOffset(offset + 1);
  //     })
  //     .catch((error: AxiosError) => {
  //       console.log("error!", error);
  //       return false;
  //     });
  // };

  //스크롤액션모듈
  //뷰 하단으로부터 16px에 진입했을 경우 handleScroll작동
  //작동 후 3초간 반복작동 중지
  // useScroll(handleScroll, { offset: 16, debounceDelay: 3000 });

  // const onClickCreatePost = (e: MouseEvent<HTMLButtonElement>) => {
  //   router.push("/post/create");
  // };

  return (
    <div>
      <SearchBar onSearch={null} />
      <ExchangeRate data={exchange.data} />
    </div>
  );
}

//SSR 서버로부터 랜더링 전 Post List를 받아옴
export const getServerSideProps: GetServerSideProps = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const result = await axios.get(
    // `${apiUrl}/query?function=CURRENCY_EXCHANGE_RATE&from_currency=KRW&to_currency=USD&apikey=${apiKey}`
    `${apiUrl}/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=demo`
  );
  const exchangeData = result.data;

  return { props: { exchangeData } };
};
