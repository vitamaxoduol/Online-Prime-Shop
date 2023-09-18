import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { ProductContext } from './components/Contexts/ProductContext';

function ProductDetails() {
    // const { product } = useContext(ProductContext);
    const { loading, setLoading } = useState(true);
    const [detailedProduct, setDetailedProduct] = useState({});
    const { productId } = useParams();


    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${productId}`);
                const productData = await response.json();
                setDetailedProduct(productData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };

        fetchProductDetails();
    },);

    if (loading || !detailedProduct.images) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{detailedProduct.title}</h1>
            <img src={detailedProduct.thumbnail} alt={detailedProduct.title} />
            <h5>Brand: {detailedProduct.brand}</h5>
            <h5>Price: KSH{detailedProduct.price}</h5>
            <p>{detailedProduct.description}</p>
            <p>Rating: {detailedProduct.rating} ⭐</p>
            <p>Stock: {detailedProduct.stock}</p>
            <p>Discount: {detailedProduct.discountPercentage}%</p>
            <h4>Images:</h4>
            <ul>
                {detailedProduct.images.map((img, index) => (
                    <li key={index}>
                        <img src={img} alt={`${detailedProduct.title} img-${index}`} width="50" height="50" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductDetails;