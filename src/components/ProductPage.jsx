import react, { useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';

function ProductPage() {
    const { id } = useParams();
    const { products } = useOutletContext();
    const product = products.find(p => p.id === id);

    const [editMode, setEditMode] = useState(false);

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Origin: {product.origin}</p>
            <p>${product.price}</p>
        </div>
    )
}

export default ProductPage;
