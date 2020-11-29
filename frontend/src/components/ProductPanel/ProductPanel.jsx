import React, { useState, useEffect } from 'react';
import ProductCard from "../ProductCard/ProductCard";
import axios from 'axios';


function ProductPanel(props) {
    const [products, setProducts] = useState([
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
                                            ]);
    const [recommendation, setRecommendation] = useState([
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
                                                        ]);

    useEffect(() => {
        const apiUrl = 'http://localhost:9000';

        const getProducts = async () => {
          const { data } = await axios.get(`${apiUrl}/products`);
          setProducts(data.products);
        };
    
        const clearProducts = async () => {
          setProducts([]);
        }
        
        getProducts();
    
        return function cleanup() {
          clearProducts();
        };
      });

      useEffect(() => {
        const apiUrl = 'http://localhost:9000';

        const getRecommendation = async () => {
          const { data } = await axios.get(`${apiUrl}/recommendation`);
          setRecommendation(data.products);
        };
    
        const clearRecommendation = async () => {
          setRecommendation([]);
        }
        
        getRecommendation();
    
        return function cleanup() {
          clearRecommendation();
        };
      });



    return (
        <div className="mt-5">
            {props.jwt && <section className="mt-3">
                <div className="container">
                    <header class="section-heading">
                        <h3 class="d-flex section-title">Recommendation</h3>
                    </header>
                    <div className="row">
                        {recommendation.map((product, i) => {
                            return (
                                <div className="col md-3" key={i}>
                                    <ProductCard
                                        jwt={props.jwt}
                                        productName={product.productName}
                                        imageName={product.imageName}
                                        description={product.description}
                                        price={product.price}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>}
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
                                        jwt={props.jwt}
                                        productId={product.id}
                                        productName={product.productName}
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