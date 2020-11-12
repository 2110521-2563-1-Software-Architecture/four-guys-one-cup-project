import axios from "axios";
import React from "react";

const ProfileCard = (props) => {

    function addToCart(user,product) {
        console.log(product)
        axios.post("http://localhost:9000/api/addToCart", {userId:"TODO", productId: product.id})
    }

    return (
        <div
            className="card card-product-grid"
            style={{
                width: "18rem",
                height: "18rem",
                margin: "1rem",
                textAlign: "left",
            }}
        >
            <img
                className="card-img-top"
                src={require(`../../static/productImages/${props.imageName}`)}
                alt={props.productName}
                height="60%"
            />
            <div
                className="d-flex flex-column card-body"
                style={{ padding: "10px" }}
            >
                <h5 className="card-title" style={{ marginBottom: "4px" }}>
                    {props.productName}
                </h5>
                <p
                    className="mt-auto mb-1 card-text"
                    style={{ fontWeight: "bold" }}
                >
                    {`฿${props.price}`}
                </p>
                <a href="" className="btn btn-primary" onClick={() => addToCart("Todo",props)}>
                    Add to Cart
                </a>
            </div>
        </div>
    );
};

export default ProfileCard;
