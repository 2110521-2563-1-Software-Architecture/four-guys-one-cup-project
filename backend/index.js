import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import {addUser, purchase} from './controller/userController.js'
import {addProduct, getAllProducts, getSortedProduct} from './controller/productController.js'
import {checkToken, loginAttempt} from './controller/authController.js'
import {decryptData} from './middlewares/authMiddleware.js'
// Constants
const PORT = 9000;


// App

const app = express();
const corsOptions = {
  origin : 'http://localhost:5000',
  credentials: true
}
app.use(cors(corsOptions));
app.use(bodyParser.json()); 
//app.use(express.json());
//app.use(Users);
app.get('/', (req, res) => {

    res.status(200).send({
          message: 'hello world'
    });
});
//Users CRUD
app.post('/api/users/register', async (req, res) => {
    addUser(req.body, res);
  });
app.put('/api/userPurchase',
    decryptData,
    purchase);

app.post('/api/users/login', async (req,res) => {
    loginAttempt(req,res);
});
app.get('/api/auth/checkUser', (req,res) => {
    checkToken(req,res)
})

//Product CRUD
app.post('/api/createProduct', async (req, res) => {
  addProduct(req.body, res);
});
app.get('/api/products', async (req,res) => {
  try {
    let products = await getAllProducts()
    res.status(200).send(products)
  } catch (err) {
    console.log(err)
    res.status(502).send(err)
  }
});
app.post('/api/getSortedProducts', 
    decryptData, 
    getSortedProduct);
app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
