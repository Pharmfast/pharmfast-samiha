import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import Product from './Product';
import { selectProductId } from "../features/productSlice";


function ProductPage() {
    const productId = useSelector(selectProductId);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const unsubscribe = db.collection("categories")
        .doc(productId)
        .collection("products")
        .onSnapshot((snapshot) => {
            setProduct(snapshot.docs.map((doc) => ({
                data: doc.data(),
            })))
        });
        return () => unsubscribe();
    },[product]);

    return (
        <div>
            {product?.map(({data: {image, name, newprice, offer, oldprice, rating}}) => (
                <Product
                key={productId}
                id={productId}
                image={image}
                name={name}
                newprice={newprice}
                oldprice={oldprice}
                offer={offer}
                rating={rating}
                />
            ))}
        </div>
    )
}

export default ProductPage
