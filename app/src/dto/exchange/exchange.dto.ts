import { Expose, Type } from "class-transformer";
import { RealtimeCurrencyExchangeRateDto } from "./realtime-currency-exchange-rate.dto";

export class ExchangeDto {
  @Expose({ name: "Realtime Currency Exchange Rate" })
  @Type(() => RealtimeCurrencyExchangeRateDto)
  public readonly data: RealtimeCurrencyExchangeRateDto =
    new RealtimeCurrencyExchangeRateDto();
}
