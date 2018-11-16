
import * as mongoose from 'mongoose';

export const StocktakeSchema = new mongoose.Schema({
  stock: Number,
  claims: Number,
  taken: Date,
});