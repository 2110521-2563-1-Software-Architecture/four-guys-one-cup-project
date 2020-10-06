import express from 'express';
import mongoose from 'mongoose';
import {Sequelize, Model, DataTypes} from 'sequelize' 


// Constants
const PORT = 9000;


// App
const app = express();
app.get('/', (req, res) => {

    res.status(200).send({
          message: 'hello world'
    });
});


app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
