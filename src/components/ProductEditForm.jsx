import react, { useId, useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';

function ProductEditForm() {
    const id = useId();
    const { product, handleEditProduct } = useOutletContext();
    const [updatedProduct, setUpdatedProduct] = useState(product);
    const navigate = useNavigate();

    function onNameChange(e) {
        setUpdatedProduct({...updatedProduct, name: e.target.value});
    }

    function onDescriptionChange(e) {
        setUpdatedProduct({...updatedProduct, description: e.target.value});
    }

    function onOriginChange(e) {
        setUpdatedProduct({...updatedProduct, origin: e.target.value});
    }

    function onPriceChange(e) {
        setUpdatedProduct({...updatedProduct, price: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:4000/products/${updatedProduct.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedProduct)
        })
        .then(r => {
        if (r.ok) {
            return r.json();
        } else {
            console.log("Product failed to create")
        }
        })
        .then(updatedProduct => {
            handleEditProduct(updatedProduct);
            navigate(`/products`);
        })
        .catch(error => console.log(error))
    }
  return (
    <div className="add-product-form">
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor={id + '-productName'}>Product Name:</label>
            <input type="text" id={id + '-productName'} value={updatedProduct.name} onChange={onNameChange} />
            <label htmlFor={id + '-description'}>Description:</label>
            <input type="text" id={id + '-description'} value={updatedProduct.description} onChange={onDescriptionChange} />
            <label htmlFor={id + '-origin'}>Origin:</label>
            <input type="text" id={id + '-origin'} value={updatedProduct.origin} onChange={onOriginChange} />
            <label htmlFor={id + '-price'}>Price:</label>
            <input type="number" id={id + '-price'} value={updatedProduct.price} step="0.01" onChange={onPriceChange} />
            <button type="submit">Submit Changes</button>
        </form>
    </div>
  )
}

export default ProductEditForm;
