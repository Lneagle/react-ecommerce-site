import react, { useId, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function Admin() {
    const id = useId();
    const [newProduct, setNewProduct] = useState({name:"", description:"", origin:"", price: 0});
    const { handleAddProduct } = useOutletContext();

  function onNameChange(e) {
    setNewProduct({...newProduct, name: e.target.value});
  }

  function onDescriptionChange(e) {
    setNewProduct({...newProduct, description: e.target.value});
  }

  function onOriginChange(e) {
    setNewProduct({...newProduct, origin: e.target.value});
  }

  function onPriceChange(e) {
    setNewProduct({...newProduct, price: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:4000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    })
    .then(r => {
      if (r.ok) {
        return r.json();
      } else {
        console.log("Product failed to create")
      }
    })
    .then(newProduct => {
            handleAddProduct(newProduct);
            setNewProduct({name:"", description:"", origin:"", price: 0});
        })
    .catch(error => console.log(error))
  }

    return (
        <div className="add-product-form">
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor={id + '-productName'}>Product Name:</label>
            <input type="text" id={id + '-productName'} value={newProduct.name} onChange={onNameChange} />
            <label htmlFor={id + '-description'}>Description:</label>
            <input type="text" id={id + '-description'} value={newProduct.description} onChange={onDescriptionChange} />
            <label htmlFor={id + '-origin'}>Origin:</label>
            <input type="text" id={id + '-origin'} value={newProduct.origin} onChange={onOriginChange} />
            <label htmlFor={id + '-price'}>Price:</label>
            <input type="number" id={id + '-price'} value={newProduct.price} step="0.01" onChange={onPriceChange} />
            <button type="submit">Add Product</button>
        </form>
        </div>
  )
}

export default Admin;
