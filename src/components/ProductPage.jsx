import react, { useState } from 'react';
import { useParams, useOutletContext, Outlet, useNavigate } from 'react-router-dom';

function ProductPage() {
    const { id } = useParams();
    const { products, handleEditProduct, isLoggedIn } = useOutletContext();
    const product = products.find(p => p.id === id);
    const navigate = useNavigate();
    const [isEditMode, setIsEditMode] = useState(false);

    function handleEditClick() {
        setIsEditMode(true);
        navigate(`/products/${id}/edit`);
    }

    return (
        <main className="product-details">
            <h2>{product.name}{isLoggedIn && !isEditMode ? <button onClick={handleEditClick}>Edit</button> : ""}</h2>
            <p>{product.description}</p>
            <p>Origin: {product.origin}</p>
            <p>${product.price}</p>
            <Outlet context={{ product, handleEditProduct }} />
        </main>
    )
}

export default ProductPage;
