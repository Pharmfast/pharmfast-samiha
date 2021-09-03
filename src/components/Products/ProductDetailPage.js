import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectProductDetailId } from '../../features/productDetailSlice';
import { selectProductId } from '../../features/productSlice';
import { db } from '../../firebase';
import Banner from '../Banner'
import Header from '../Header'
import ProductDetails from './ProductDetails';

function ProductDetailPage() {
    const productDetailId = useSelector(selectProductDetailId);
    const productId = useSelector(selectProductId);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        if(productDetailId) {
                const unsubscribe = db.collection("categories")
            .doc(productId)
            .collection("products")
            .doc(productDetailId)
            .collection("productdetail")
            .onSnapshot((snapshot) => {
                setProduct(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                })))
            });
            return () => unsubscribe();
        }
    },[product]);

    return (
        <div>
            <Header/>
            <Banner/>
            <div className="grid grid-cols-3 m-4 xl:ml-0">
                {product?.map(({data: {id, image, name, newprice, offer, oldprice, rating}}) => (
                    <ProductDetails
                    key={productDetailId}
                    id={productDetailId}
                    image={image}
                    name={name}
                    newprice={newprice}
                    oldprice={oldprice}
                    offer={offer}
                    rating={rating}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductDetailPage
