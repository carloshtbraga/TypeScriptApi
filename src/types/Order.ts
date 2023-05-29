import { Product } from './Product';

export type Order = {
  id: number;
  userId: number;
  productIds?: Product[];
};

export type Order2 = {
  id: number;
  userId: number;
  productIds?: number[];
};
