export interface Record {
  details: Details[];
  total: number;
}

export interface Details{
  id: number;
  name: string;
  price: string;
  quantity: number;
  discount: number;
  total: number;
}
