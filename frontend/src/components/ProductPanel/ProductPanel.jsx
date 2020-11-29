import React, { useState, useEffect } from 'react';
import ProductCard from "../ProductCard/ProductCard";
import axios from 'axios';


function ProductPanel() {
    const [products, setProducts] = useState([]/*[
                                                {
                                                    productName:"Playstation 5",
                                                    imageName:"ps5.jpg",
                                                    description:"Play Has No Limits I love you playstation 5",
                                                    price:"15990"
                                                },
                                                {
                                                    productName:"Playstation 5",
                                                    imageName:"ps5.jpg",
                                                    description:"Play Has No Limits I love you playstation 5",
                                                    price:"15990"
                                                },
                                                {
                                                    productName:"Playstation 5",
                                                    imageName:"ps5.jpg",
                                                    description:"Play Has No Limits I love you playstation 5",
                                                    price:"15990"
                                                },
                                                {
                                                    productName:"Playstation 5",
                                                    imageName:"ps5.jpg",
                                                    description:"Play Has No Limits I love you playstation 5",
                                                    price:"15990"
                                                },
                                                {
                                                    productName:"Playstation 5",
                                                    imageName:"ps5.jpg",
                                                    description:"Play Has No Limits I love you playstation 5",
                                                    price:"15990"
                                                },
                                                {
                                                    productName:"Playstation 5",
                                                    imageName:"ps5.jpg",
                                                    description:"Play Has No Limits I love you playstation 5",
                                                    price:"15990"
                                                }
                                            ]*/);
    const [recommendation, setRecommendation] = useState([
                                                            // {
                                                            //     productName:"Playstation 5",
                                                            //     imageName:"ps5.jpg",
                                                            //     description:"Play Has No Limits I love you playstation 5",
                                                            //     price:"15990"
                                                            // },
                                                            // {
                                                            //     productName:"Playstation 5",
                                                            //     imageName:"ps5.jpg",
                                                            //     description:"Play Has No Limits I love you playstation 5",
                                                            //     price:"15990"
                                                            // },
                                                            // {
                                                            //     productName:"Playstation 5",
                                                            //     imageName:"ps5.jpg",
                                                            //     description:"Play Has No Limits I love you playstation 5",
                                                            //     price:"15990"
                                                            // }
                                                        ]);

    useEffect(() => {
        const apiUrl = '';

        const getProducts = async () => {
          const { data } = await axios.get('/api/products');
          setProducts(data)
        };
    
        const clearProducts = async () => {
          setProducts([]);
        }

        const getRecommendProducts = async () => {
            const { data } = await axios.post(`/api/getSortedProducts`, {recommendAlgo:"contentbased"});
            setRecommendation(data)
        }
        
        getProducts();
        getRecommendProducts();
        return function cleanup() {
          clearProducts();
        };
      },[...products, ...recommendation]);



    return (
        <div className="mt-5">
            <section className="mt-3">
                <div className="container">
                    <header class="section-heading">
                        <h3 class="d-flex section-title">Recommendation</h3>
                    </header>
                    <div className="row">
                        {recommendation.map((product, i) => {
                            return (
                                <div className="col md-3" key={i}>
                                    <ProductCard
                                        _id = {product._id}
                                        productName={product.name}
                                        imageName={product.imageName}
                                        description={product.description}
                                        price={product.price}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className="my-3">
            <div className="container">
                <header class="section-heading">
                    <h3 class="section-title">Products</h3>
                </header>
                <div className="row">
                    {products.map((product, i) => {
                        return (
                            <div className="col md-3" key={i}>
                                <ProductCard
                                    _id = {product._id}
                                    productName={product.name}
                                    imageName={product.imageName}
                                    description={product.description}
                                    price={product.price}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    </div>
    )
}

export default ProductPanel;