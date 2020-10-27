import User from '../model/mongooseModel'
import Product from '../model/mongooseModel'

const RecommendProductInterface = class{
    constructor(){
        if(!this.sort){
            throw new Error('Recommend Class must has sort medthod')
        }
    }

}


const ContentBasedFiltering = class extends RecommendProductInterface{
    constructor(){
        
    }
    distanceFuntion(name){
        let distanceScore = 0
        if(name == 'dot-product'){
            // TODO //
        }
        else if(name == 'consine'){

        }
        return distanceScore /*return score*/
    }
    createScoreVector(userVector, productVector, scoreFunction){
        
        // TODO //
    }
    sort(userVector, productVector, scoreFunction){
        let scoreVector = createScoreVector(userVector, productVector, scoreFunction)
        // TODO //
        /* sort product accordding to scoreVector */
        
    }
}