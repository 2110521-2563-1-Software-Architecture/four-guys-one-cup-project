import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import {addUser, purchase} from './controller/userController.js'
import {addProduct} from './controller/productController.js'

// Constants
const PORT = 2000;


// App

const app = express();
app.use(bodyParser.json()); 
//app.use(express.json());
//app.use(Users);
app.get('/', (req, res) => {

    res.status(200).send({
          message: 'hello world'
    });
});
//Users CRUD
app.post('/api/createUser', async (req, res) => {
    addUser(req.body, res);
  });
app.put('/api/userPurchase', async (req, res) => {
    let payload = req.body
    purchase(payload.email, payload.productId, res)
  });
//Product CRUD
app.post('/api/createProduct', async (req, res) => {
  addProduct(req.body, res);
});
app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
