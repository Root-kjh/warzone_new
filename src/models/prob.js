import { Schema } from "mongoose";
import mongoose from 'mongoose';

const Prob = new Schema({
  title: String,
  context: String,
  score: Number,
  author: String,
  flag: String
})

export default mongoose.model('Prob', Prob);