import react from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    

    return (
        <div className='product-card'>
            <h3><Link to={`/products/${product.id}`}>{product.name}</Link></h3>
            <p>{product.description}</p>
            <p>Origin: {product.origin}</p>
            <p>${product.price}</p>
        </div>
    )
}

export default ProductCard;
