import Product from '../model/mongooseModel';


async function getAllProduct(){

    let products = await Product.find({}).exec();

    return products

}

async function getProduct(productId){

    if (!itemId) return false
    let product = await Product.findById(productId).exec();
    if (product){
        return product
    }
    else{
        return null

    }

}

async function addProduct(product){
    
    let newProduct = await Product.create(
        product
    ).exec();
    
    return newProduct

}

export { getAllProduct, getProduct, addProduct }