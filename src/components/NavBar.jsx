import react from 'react';
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className="nav-link"
      >
        Shop
      </NavLink>
      <NavLink
        to="/admin"
        className="nav-link"
      >
        Admin Portal
      </NavLink>
    </nav>
  )
}

export default NavBar
