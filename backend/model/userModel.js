import mongoose from 'mongoose';
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});

const productSchema = new Schema({
  name:  String,
  age: Number,
  gender: String,
  nationality: String,
  occupation: String,
  vector: [mongoose.Types.Decimal128]
});