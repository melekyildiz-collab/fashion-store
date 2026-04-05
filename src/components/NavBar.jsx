import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function NavBar() {
  const { cart } = useContext(CartContext);

  return (
    <nav style={{ padding: "20px", borderBottom: "1px solid #ddd" }}>
      <h2>Fashion Store 👕</h2>

      <div>
        <Link to="/">Home</Link> |{" "}
        <Link to="/shop">Shop</Link> |{" "}
        <Link to="/cart">Cart ({cart.length})</Link>
      </div>
    </nav>
  );
}

export default NavBar;