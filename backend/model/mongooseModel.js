import mongoose from 'mongoose';
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/4guys1cup', {useNewUrlParser: true});

const productSchema = new Schema({
  name:  String,
  category: String,
  price: mongoose.Types.Decimal128,
  vector: [mongoose.Types.Decimal128]
});

const userSchema = new Schema({
  name:  String,
  age: Number,
  gender: String,
  nationality: String,
  occupation: String,
  vector: [mongoose.Types.Decimal128]
});

export {productSchema as Product, userSchema as User}