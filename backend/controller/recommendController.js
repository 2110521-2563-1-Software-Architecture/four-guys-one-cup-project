
const RecommendProductInterface = class{
    constructor(){
        if(!this.sort){
            throw new Error('Recommend Class must has sort medthod')
        }
    }

}


const ContentBasedFiltering = class extends RecommendProductInterface{
    constructor(){
        super()
        
    }
    distanceFuntion(scoreFunction){
        let distanceScore = 0
        if(scoreFunction == 'dot-product'){
            // TODO //
        }
        else if(scoreFunction == 'consine'){

        }
        return distanceScore /*return score*/
    }
    createScoreVector(userVector, productVector){
        
        // TODO //
    }
    updateUserVector(userVector, productVector){
        //console.log(userVector[0])
        var sum = userVector.map(function (num, idx) {
            
            return parseFloat(num) + parseFloat(productVector[idx]);
          });
        return sum
    }
    sort(userVector, productVector, scoreFunction){
        let scoreVector = createScoreVector(userVector, productVector)
        // TODO //
        /* sort product accordding to scoreVector */
        
    }
}
const contentBasedFiltering = new ContentBasedFiltering
export {contentBasedFiltering}