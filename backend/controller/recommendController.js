import User from '../model/mongooseModel'
import Product from '../model/mongooseModel'

const RecommendInterface = class{
    constructor(){
        if(!this.sort){
            throw new Error('Recommend Class must has sort medthod')
        }
    }

}

const Recommend 