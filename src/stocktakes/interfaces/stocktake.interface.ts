
import { Document } from 'mongoose';

export interface Stocktake extends Document{
  stock: number;
  claims: number;
  taken: string;
}