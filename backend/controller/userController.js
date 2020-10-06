import User from '../model/mongooseModel'
import Product from '../model/mongooseModel'

const getUser = async (userId) => {
    return await User.findById(userId).exec()
}

const getAllUsers = async () => {
    return await User.find({})
}

const addUser = async (user) => {
    return await User.create(user)
}

const purchase = async (productId) => {
    let product = await Product.findById(productId).exec()
    // TODO //
    /* Change Vector for Recommendation */
}

const getRecommendationProducts = async (userId) => {
    // TODO //
}