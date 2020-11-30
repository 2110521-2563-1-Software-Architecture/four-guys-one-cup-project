import similarity from 'compute-cosine-similarity'

function add(accumulator, a) {
    return accumulator + a;
}

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
        const sum = userVector.reduce(add,0);
        userVector = userVector.map(function (num, idx){
            return num/sum
        });
        
        products.forEach(product => {
            let productVector = product.vector.map(function (num, idx) {
                let parsed = parseFloat(num)
                if (parsed==0){
                    return parsed
                }
                return parsed;
            });
            console.log(productVector, userVector,similarity(productVector, userVector))
            scoreVector.push(similarity(productVector, userVector))
        });
       
        products = products.sort((a,b) => scoreVector[products.indexOf(b)] - scoreVector[products.indexOf(a)])
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
