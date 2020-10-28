
import {Products }from '../model/mongooseModel.js'

async function getAllProduct(){

    let products = await Product.find({}).exec();

    return products

}

async function getProduct(productId){

    if (!productId) return false
    let product = await Product.findById(productId).exec();
    if (product){
        return product
    }
    else{
        return null

    }

}

async function addProduct(body, res){
    try{
        let newProduct = new Products(body)
        await newProduct.save()
        res.send(newProduct)
    }catch(err){
        res.status(500).send(err);
        console.log(err)
    }
    
    
}

export { getAllProduct, getProduct, addProduct }