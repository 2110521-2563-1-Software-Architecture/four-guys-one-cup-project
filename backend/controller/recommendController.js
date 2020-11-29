import similarity from 'euclidean-distance'

const RecommendProductInterface = class{
    constructor(){
        if(!this.sortProduct){
            throw new Error('Recommend Class must has sort medthod')
        }
    }

}


const ContentBasedFiltering = class extends RecommendProductInterface{
    constructor(){
        super()
        
    }
    updateUserVector(userVector, productVector){
        //console.log(userVector[0])
        var sum = userVector.map(function (num, idx) {
            
            return parseFloat(num) + parseFloat(productVector[idx]);
          });
        return sum
    }
    sortProduct(products, userVector){
        let scoreVector = []
        var userVector = userVector.map(function (num, idx) {
            
            return parseFloat(num);
          });
        products.forEach(product => {
            let productVector = product.vector.map(function (num, idx) {
            
                return parseFloat(num);
            });
            scoreVector.push(similarity(productVector, userVector))
        });
        
        products = products.sort((a,b) => scoreVector[products.indexOf(a)] - scoreVector[products.indexOf(b)])
        return products
    }
    cosineSimilarity(vect1, vect2){
        let score = similarity(vect1, vect2)
        if (isNaN(parseFloat(score))){
            return 0.0
        }
        return score
    }
}
const contentBasedFiltering = new ContentBasedFiltering
export {contentBasedFiltering}
