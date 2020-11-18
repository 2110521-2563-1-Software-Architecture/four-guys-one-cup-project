import mongoose from 'mongoose';
const Schema  = mongoose.Schema;

mongoose.connect('mongodb+srv://time131:softarch2020@recommendation.kyk6s.mongodb.net/Online_Shopping?retryWrites=true&w=majority', 
{
  useNewUrlParser: true,
  useCreateIndex: true,
  autoIndex: true,
  useFindAndModify: true
});
const counterSchema = new Schema({
  _id: {
    type:String,
    required: true,
  },
  seq: { 
    type: Number, 
    default: 0 
  }

});
const counter = await mongoose.model('counter', counterSchema).init();

const productSchema = new Schema({
  name:  String,
  category: String,
  price: mongoose.Types.Decimal128,
  vector: {
    type: [mongoose.Types.Decimal128],
    default: [0,0,0,0,0]
  },
  description: {
    type: String,
    default: ""
  }
});

const Products = await mongoose.model("Product",productSchema).init()

const userSchema = new Schema({
  email: {
    type:String,
    unique: true,
    required: true
  },
  password : String,
  name:  {
    type:String,
    required: true
  },
  cart: [{type:mongoose.Schema.Types.ObjectId, ref: "Product"}],
  age: Number,
  gender: String,
  nationality: String,
  occupation: String,
  vector: {
    type: [mongoose.Types.Decimal128],
    default: [0,0,0,0,0]
  }
});
const Users = await mongoose.model("User",userSchema).init()

export { Products, Users}