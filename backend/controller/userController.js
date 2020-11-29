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

const purchase = async (req, res) => {
    const productVector = await Products.findById(req.body.productId).exec();
    const user = await Users.findById(req.body.userId).exec();
    let newVector = contentBasedFiltering.updateUserVector(user.vector, productVector.vector);
    user.vector = newVector;
    //cal vector
    // console.log('purchase')
    // let newVector = contentBasedFiltering.updateUserVector(user.vector, productVector.vector);
    try{
        await user.save()
        res.status(200);
        // console.log("try", user)
        // res.status(200).send(user);
    }catch(err){
        res.status(500).send(err);
    }

}



export {getUser, getAllUsers, addUser, purchase}
