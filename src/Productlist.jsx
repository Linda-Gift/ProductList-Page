import ProductComponent from "./Productcomponent.jsx"

function ProductCard({ layout = "grid" }){
    const products = [
        {
            image : "./src/assets/Radha.png",
            productName : "Body oil Serum",
            productPrice : 500,
            productId : "FD3678",
            available : false,
            productDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti molestias recusandae ratione reiciendis?"
        },

        {
            image : "./src/assets/oil.png",
            productName : "Body oil Serum",
            productPrice : 500,
            productId : "FD3678",
            available : false,
            productDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti molestias recusandae ratione reiciendis?"
        },

        {
            image : "./src/assets/skin.png",
            productName : "Body oil Serum",
            productPrice : 500,
            productId : "FD3678",
            available : false,
            productDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti molestias recusandae ratione reiciendis?"
        },

        {
            image : "./src/assets/waterbottle.png",
            productName : "EcoTherm Water Bottle",
            productPrice : 24.99,
            productId : "FD3678",
            available : true,
            productDescription : "A stainless steel water bottle with double-wall insulation, keeping beverages hot for up to 12 hours and cold for 24 hours."
        },

        {
            image : "./src/assets/yoga.png",
            productName : "SmartFit Yoga Mat",
            productPrice : 35.50,
            productId : "FD3678",
            available : true,
            productDescription : "A non-slip, eco-friendly yoga mat with alignment lines to help improve your form. Ideal for beginners and experts alike."
        },

        {
            image : "./src/assets/charger.png",
            productName : "Wireless Charger",
            productPrice : 18.99,
            productId : "FD3678",
            available : true,
            productDescription : "A compact and fast wireless charger compatible with most smartphones and devices supporting Qi charging."
        },

        {
            image : "./src/assets/charger2.png",
            productName : "Wireless Charger",
            productPrice : 18.99,
            productId : "FD3678",
            available : true,
            productDescription : "A compact and fast wireless charger compatible with most smartphones and devices supporting Qi charging."
        },

        {
            image : "./src/assets/charger1.png",
            productName : "Wireless Charger",
            productPrice : 18.99,
            productId : "FD3678",
            available : true,
            productDescription : "A compact and fast wireless charger compatible with most smartphones and devices supporting Qi charging."
        },

        {
            image : "./src/assets/yogamat.png",
            productName : "Wireless Charger",
            productPrice : 18.99,
            productId : "FD3678",
            available : true,
            productDescription : "A compact and fast wireless charger compatible with most smartphones and devices supporting Qi charging."
        },


        {
            image : "./src/assets/ferrari.png",
            productName : "Noiseless Headphone",
            productPrice : 75.50,
            productId : "FD3678",
            available : true,
            productDescription : "Wireless, over-ear headphones with active noise cancellation and up to 30 hours of battery life."
        },

        {
            image : "./src/assets/headphone1.png",
            productName : "Noiseless Headphone",
            productPrice : 75.50,
            productId : "FD3678",
            available : true,
            productDescription : "Wireless, over-ear headphones with active noise cancellation and up to 30 hours of battery life."
        },

        {
            image : "./src/assets/air.png",
            productName : "Breeze Air Purifier",
            productPrice : 89.50,
            productId : "FD3678",
            available : true,
            productDescription : "A high-efficiency air purifier with HEPA filtration, designed to improve indoor air quality by capturing allergens and pollutants."
        },

        {
            image : "./src/assets/purifier.png",
            productName : "Breeze Air Purifier",
            productPrice : 89.50,
            productId : "FD3678",
            available : true,
            productDescription : "A high-efficiency air purifier with HEPA filtration, designed to improve indoor air quality by capturing allergens and pollutants."
        },

        {
            image : "./src/assets/blender.png",
            productName : "ProBlend Blender",
            productPrice : 90.99,
            productId : "FD3678",
            available : true,
            productDescription : "A powerful countertop blender with multiple speed settings and a BPA-free jar, perfect for smoothies and soups."
        },

        {
            image : "./src/assets/blender1.png",
            productName : "ProBlend Blender",
            productPrice : 90.99,
            productId : "FD3678",
            available : true,
            productDescription : "A powerful countertop blender with multiple speed settings and a BPA-free jar, perfect for smoothies and soups."
        }
    ]
    return(
        <div className= "main-container" >
            {
                products.map((product, index)=>(
                    <div className ="overallproduct-container" key = {index}>
                        {
                            product.available === true?
                            <ProductComponent 
                            image = {product.image}
                            productName ={product.productName}
                            productId = {product.productId}
                            productPrice = {product.productPrice}
                            productDescription = {product.productDescription}
                            /> :
                        ""}
                    </div>
                ))
            }
        </div>
    )
}

export default ProductCard