import {Users} from '../model/mongooseModel.js'
import bcrypt from "bcryptjs"
import {Products }from '../model/mongooseModel.js'
import {contentBasedFiltering} from './recommendController.js'

const getUser = async (userId) => {
    return await Users.findById(userId).exec()
}

const getAllUsers = async () => {
    return await Users.find({})
}

const addUser = async (body, res) => {
    if (body.password) {
        var hashedPassword = bcrypt.hashSync(body.password, 8);
        body.password = hashedPassword;
    }
    try{
        let user = new Users(body);
        await user.save()
        res.send(user);
    }catch(err){
        res.status(500).send(err);
    }
}

const purchase = async (userEmail,productId, res) => {
    const productVector = await Products.findOne({id: productId}).exec();
    const user = await Users.findOne({email: userEmail}).exec();
    //cal vector
    
    let newVector = contentBasedFiltering.updateUserVector(user.vector, productVector.vector)
    user.vector = newVector
    try{
        await user.save()
        res.send(user);
    }catch(err){
        res.status(500).send(err);
    }

}

const getRecommendationProducts = async (userId) => {
    // TODO //
}

const addToCart = async (userId, productId, res) => {
    Users.findByIdAndUpdate(userId, {$push: {cart:productId}}, {new: true}, (err,updateUser) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(updateUser.cart)
        }
    })

}
export {getUser, getAllUsers, addUser, purchase, addToCart}