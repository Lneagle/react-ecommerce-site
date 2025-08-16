import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./Layout"
import Admin from "./Admin"
import Home from "./Home"
import Shop from "./Shop"
import ProductPage from './ProductPage';
import Login from './Login';
import ProductEditForm from './ProductEditForm';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/products/:id" element={<ProductPage />}>
            <Route path="edit" element={<ProductEditForm />} />
          </Route>
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
