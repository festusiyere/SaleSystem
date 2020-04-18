import { Details } from './record';

export interface ProductSale{
  id: number;
  details: Details[];
  ref_no: string;
  total: number;
  created_at: Date;
}
