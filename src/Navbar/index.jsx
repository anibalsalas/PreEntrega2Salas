import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'; // importa el archivo CSS


const Navbar = () => {
  let activeStyle = {
    textDecoration: "underline",
  };
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category')
      .then(response => response.json())
      .then(data => setCategorias(data))
      .catch(error => console.error(error));
  }, []);
  // let activeClassName = "underline";
  return (
    <nav className="container">
       <NavLink to ="/" style={({ isActive}) =>
        (isActive ? activeStyle :undefined)}>
         <p>Inicio</p>
      </NavLink> 
      <NavLink to="/productos"  style={({ isActive}) =>
        (isActive ? activeStyle :undefined)}>
      <p>Productos</p>
      </NavLink> 
      {categorias.map(category => (
        <NavLink
          key={category}
          to={`/productos/${category}`}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <p>{category}</p>
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
