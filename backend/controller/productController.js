
import {Products }from '../model/mongooseModel.js'
import {contentBasedFiltering} from './recommendController.js'
import {getUser} from './userController.js'

async function getAllProduct(){

    let products = await Product.find({}).exec();

    return products

}

async function getSortedProduct(recommendAlgo, userId, res){
    switch(recommendAlgo){
        case "contentbased":
            var recommend = contentBasedFiltering
    }
    let user = await getUser(userId)
    let products = await Products.find({}).exec();
    let sortedProducts = recommend.sortProduct(products, user.vector)
    try{
        res.send(sortedProducts)
    }catch(err){
        res.status(500).send(err);
    }

}

async function getProduct(productId){

    if (!productId) return false
    let product = await Products.findById(productId).exec();
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

export { getAllProduct, getProduct, addProduct, getSortedProduct }