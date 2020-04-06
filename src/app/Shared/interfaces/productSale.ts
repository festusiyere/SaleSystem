import { Details } from './record';

export interface ProductSale{
  id: string;
  details: Details[];
  ref_no: string;
  total: number;
  created_at: Date;
}
