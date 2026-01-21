export interface FxRequest {
  id: number;
  requesterName: string;
  sourceCurrency: string;
  targetCurrency: string;
  amount: number;
  purpose: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  requestDate: Date;
}
