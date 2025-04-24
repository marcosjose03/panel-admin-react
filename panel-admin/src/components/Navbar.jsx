import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../img/image.png' // ← importa tu logo

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-middle me-2 rounded"
          />

          AdminPanel
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Clientes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/proveedor">Proveedor</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/usuarios">Usuarios</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/logout">Logout</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
