import {Users} from '../model/mongooseModel.js'

import {Products }from '../model/mongooseModel.js'
import {contentBasedFiltering} from './recommendController.js'

const getUser = async (userId) => {
    return await Users.findById(userId).exec()
}

const getAllUsers = async () => {
    return await Users.find({})
}

const addUser = async (body, res) => {
    try{
        let user = new Users(body);
        await user.save()
        res.send(user);
    }catch(err){
        res.status(500).send(err);
    }
}

const purchase = async (userId,productId, res) => {
    const productVector = await Products.findOne({_id: productId}).exec();
    const user = await Users.findOne({_id: userId}).exec();
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


export {getUser, getAllUsers, addUser, purchase}
