import React from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
    return (
        <div className="App">
            <NavBar />
            <div className="container">
                <ProductCard
                    productName="Playstation 5"
                    imageName="ps5.jpg"
                    description="Play Has No Limits I love you playstation 5"
                    price="15990"
                />
            </div>
        </div>
    );
}

export default App;
