import React from 'react'

function Product({id, name, image, newprice, oldprice, offer, rating}) {
    console.log(name);
    return (
        <div>
            <h1 className="mt-96">hii</h1>
            <img src={image} alt="" />
        </div>
    )
}

export default Product
