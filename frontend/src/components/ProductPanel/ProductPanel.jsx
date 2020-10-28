import React, { useState, useEffect } from 'react';
import ProductCard from "../ProductCard/ProductCard";
import axios from 'axios';


function ProductPanel() {
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
                                                }
                                            ]);
    const [recommendation, setRecommendation] = useState([]);

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



    return (
        <div className="mt-5">
            <section className="mt-3">
                <div className="container">
                    <header class="section-heading">
                        <h3 class="flex section-title">Recommendation</h3>
                    </header>
                    <div className="row">
                        {products.map((product, i) => {
                            return (
                                <div className="" key={i}>
                                    <ProductCard
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
            <section className="my-3">
            <div className="container">
                <header class="section-heading">
                    <h3 class="section-title">Products</h3>
                </header>
                <div className="row">
                    {products.map((product, i) => {
                        return (
                            <div className="" key={i}>
                                <ProductCard
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