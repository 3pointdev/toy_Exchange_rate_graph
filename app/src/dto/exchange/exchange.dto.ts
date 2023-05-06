import { Expose } from "class-transformer";

export class ExchangeDto {
  @Expose({ name: "start_date" })
  public readonly startDate: string = "";

  @Expose({ name: "end_date" })
  public readonly endDate: string = "";

  @Expose({ name: "timeframe" })
  public readonly isTimeframe: boolean = false;

  @Expose({ name: "success" })
  public readonly isSuccess: boolean = false;

  @Expose({ name: "source" })
  public readonly source: string = "";

  @Expose({ name: "quotes" })
  public readonly quotes: { [date: string]: any } = {};
}
