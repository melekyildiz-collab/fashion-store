import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function NavBar() {
  const { cart } = useContext(CartContext);

  return (
    <nav style={styles.nav}>

      {/* Logo */}
      <h2 style={styles.logo}>Fashion Store 👕</h2>

      {/* Liens */}
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/shop" style={styles.link}>Shop</Link>
        <Link to="/about" style={styles.link}>About</Link>
      </div>

      {/* Panier */}
      <Link to="/cart" style={styles.cart}>
        🛒 {cart.length}
      </Link>

    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#111",
    color: "white"
  },
  logo: {
    margin: 0
  },
  links: {
    display: "flex",
    gap: "20px"
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold"
  },
  cart: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold"
  }
};

export default NavBar;