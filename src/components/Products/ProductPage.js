import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { db } from '../../firebase';
import Product from './Product';
import { selectProductId } from "../../features/productSlice";
import Header from '../Header';
import Banner from '../Banner';
import { enterProductDetail } from '../../features/productDetailSlice';


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
            <Header/>
            <Banner/>
            <div className="grid grid-cols-3 m-4 xl:ml-0">
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
                    enterProductDetail={enterProductDetail}
                    />
                ))}
            </div>
            
        </div>
    )
}

export default ProductPage
