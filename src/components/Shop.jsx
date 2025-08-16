import react, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import ProductCard from './ProductCard';

function Shop() {
  const { products } = useOutletContext();
  const [searchTerm, setSearchTerm] = useState('');

  function onSearchChange(e) {
    setSearchTerm(e.target.value);
  }

  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <main className="shop">
        <div className='searchbar'>
            <input type='text' id='search' placeholder='Search' onChange={onSearchChange} />
        </div>
        <div className='product-list'>
            {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
    </main>
  )
}

export default Shop;
