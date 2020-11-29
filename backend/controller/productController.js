
import {Products }from '../model/mongooseModel.js'
import {contentBasedFiltering} from './recommendController.js'
import {getUser} from './userController.js'

async function getAllProducts(){

    let products = await Products.find({},"_id name category price description").exec()
    products = products.map( product => {
        return {
            _id: product._id,
            name: product.name,
            category: product.category,
            price: parseFloat(product.price),
            description: product.description
        }
    })
    return products

}

async function getSortedProduct(req, res){
    switch(req.body.recommendAlgo){
        case "contentbased":
            var recommend = contentBasedFiltering
    }
    let user = await getUser(req.body.userId)
    let products = await Products.find({}).exec();
    let sortedProducts = recommend.sortProduct(products, user.vector)
    sortedProducts = sortedProducts.map( product => {
        return {
            _id: product._id,
            name: product.name,
            category: product.category,
            price: parseFloat(product.price),
            description: product.description
        }
    })
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
        return {
            _id: product._id,
            name: product.name,
            category: product.category,
            price: parseFloat(product.price),
            description: product.description
        }
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

export { getAllProducts, getProduct, addProduct, getSortedProduct }
