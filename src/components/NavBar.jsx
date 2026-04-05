import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "./NavBar.module.css";
function NavBar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className={styles.nav}>

      {/* Logo */}
      <h2 className={styles.logo}>Fashion Store 👕</h2>

      {/* Liens */}
      <div className={styles.links}>
        <NavLink to="/" className={styles.link}>Home</NavLink>
        <NavLink to="/shop" className={styles.link}>Shop</NavLink>
        <NavLink to="/about" className={styles.link}>About</NavLink>
      </div>

      {/* Panier */}
      <NavLink to="/cart" className={styles.cart}>
        🛒 {cart.length}
      </NavLink>

    </nav>
  );
}



export default NavBar;