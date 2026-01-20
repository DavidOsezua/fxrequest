export interface FxRequest {
  id: number;
  sourceCurrency: string;
  targetCurrency: string;
  amount: number;
  requestDate: Date;
}
