import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function Layout(){
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:4000/products")
        .then(r => {
            if (!r.ok) { throw new Error("failed to fetch products") }
            return r.json()
        })
        .then(data => setProducts(data))
        .catch(error => console.error(error))
    }, []);

    function handleAddProduct(newProduct) {
        setProducts([...products, newProduct]);
    }

    return(
        <>
            <header>
                <NavBar />
            </header>
            <Outlet context={{ products, handleAddProduct }} />
        </>
    )
}

export default Layout;