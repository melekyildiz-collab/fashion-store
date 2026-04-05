import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Panier 🛒</h1>

      {cart.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #ddd",
              padding: "10px 0"
            }}>
              <span>{item.name}</span>
              <span>{item.price} €</span>
            </div>
          ))}

          <h2>Total : {total} €</h2>
        </>
      )}
    </div>
  );
}

export default Cart;