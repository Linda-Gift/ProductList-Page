function ProductComponent({productName, productPrice, productId, productDescription, image}){
    return(
        <div className="overallproduct-container">
            <div className="product-details">
                <div className="image">
                    <img src={image} alt="product image" />
                </div>

                <div className="productname-and-id">
                    <div className="product-name">
                        <h1>{productName}</h1>
                    </div>

                    <div className="productid"><p>ID: {productId}</p></div>
                </div>

                <div className="productprice-container">
                    <div className="price"><h2>{productPrice}</h2></div>

                    <div className="currency"><p>/USD</p></div>
                </div>

                <div className="product-description">
                    <p>{productDescription}</p>
                </div>
            </div>
        </div>
    )

}

export default ProductComponent