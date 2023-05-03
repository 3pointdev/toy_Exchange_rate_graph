import { Expose } from "class-transformer";

export class RealtimeCurrencyExchangeRateDto {
  @Expose({ name: "1. From_Currency Code" })
  public readonly FromCurrencyCode: string = "";

  @Expose({ name: "2. From_Currency Name" })
  public readonly FromCurrencyName: string = "";

  @Expose({ name: "3. To_Currency Code" })
  public readonly ToCurrencyCode: string = "";

  @Expose({ name: "4. To_Currency Name" })
  public readonly ToCurrencyName: string = "";

  @Expose({ name: "5. Exchange Rate" })
  public readonly ExchangeRate: string = "";

  @Expose({ name: "6. Last Refreshed" })
  public readonly LastRefreshed: string = "";

  @Expose({ name: "7. Time Zone" })
  public readonly TimeZone: string = "";

  @Expose({ name: "8. Bid Price" })
  public readonly BidPrice: string = "";

  @Expose({ name: "9. Ask Price" })
  public readonly AskPrice: string = "";
}
