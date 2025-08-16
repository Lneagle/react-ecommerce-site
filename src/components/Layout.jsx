import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function Layout(){
    const [products, setProducts] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    function login() {
        setIsLoggedIn(true);
    }

    function logout() {
        setIsLoggedIn(false);
    }

    function handleAddProduct(newProduct) {
        setProducts([...products, newProduct]);
    }

    function handleEditProduct(editedProduct) {
        setProducts(products.map(product => {
            product.id === editedProduct.id ? editedProduct: product
        }));
    }

    useEffect(() =>{
        fetch("http://localhost:4000/products")
        .then(r => {
            if (!r.ok) { throw new Error("failed to fetch products") }
            return r.json()
        })
        .then(data => setProducts(data))
        .catch(error => console.error(error))
    }, []);

    return(
        <>
            <header>
                <NavBar />
            </header>
            <Outlet context={{ products, handleAddProduct, handleEditProduct, isLoggedIn, login, logout }} />
        </>
    )
}

export default Layout;