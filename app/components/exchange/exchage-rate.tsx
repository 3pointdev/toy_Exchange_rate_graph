import moment from "moment";
import { useEffect, useState } from "react";
import { RealtimeCurrencyExchangeRateDto } from "src/dto/exchange/realtime-currency-exchange-rate.dto";
// components/ExchangeRateResult.tsx
interface ExchangeRateResultProps {
  data: RealtimeCurrencyExchangeRateDto;
}

export function ExchangeRate({ data }: ExchangeRateResultProps) {
  const {
    FromCurrencyCode,
    FromCurrencyName,
    ToCurrencyCode,
    ToCurrencyName,
    ExchangeRate,
    LastRefreshed,
    TimeZone,
    BidPrice,
    AskPrice,
  } = data;

  const [baseKepa, setBaseKepa] = useState(0);
  useEffect(() => {
    switch (FromCurrencyCode) {
      case "KRW":
        setBaseKepa(1000);
        break;
      case "USD":
        setBaseKepa(1);
        break;
      case "JPY":
        setBaseKepa(100);
        break;
      case "CNY":
        setBaseKepa(100);
        break;
    }
  }, [FromCurrencyCode]);

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="font-bold text-xl mb-4">
        {FromCurrencyCode} - {FromCurrencyName} to {ToCurrencyCode} -{" "}
        {ToCurrencyName}
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <strong>환율:</strong> {baseKepa}
          {FromCurrencyCode} 당 {Math.floor(+ExchangeRate * 1000) / 1000}
          {ToCurrencyCode}
        </div>
        <div>
          <strong>갱신시각:</strong>{" "}
          {moment(LastRefreshed).format("YYYY년MM월DD일 HH시mm분")} ({TimeZone})
        </div>
        <div>
          <strong>팔때 가격:</strong> {baseKepa}
          {FromCurrencyCode} 당 {Math.floor(+BidPrice * 1000) / 1000}
          {ToCurrencyCode}
        </div>

        <div>
          <strong>살때 가격:</strong> {baseKepa}
          {FromCurrencyCode} 당 {Math.floor(+AskPrice * 1000) / 1000}
          {ToCurrencyCode}
        </div>
      </div>
    </div>
  );
}
