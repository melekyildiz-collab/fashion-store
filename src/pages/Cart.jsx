import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);

  // ✅ calcul total sécurisé
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Panier 🛒</h1>

      {cart.length === 0 && <p>Panier vide</p>}

      {cart.map((item, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>{item.name}</h3>

          <div>
            <button onClick={() => decreaseQty(index)}>-</button>
            <span style={{ margin: "0 10px" }}>
              {item.qty || 1}
            </span>
            <button onClick={() => increaseQty(index)}>+</button>
          </div>

          <p>{item.price * (item.qty || 1)} €</p>

          <button onClick={() => removeFromCart(index)}>
            ❌ Supprimer
          </button>
        </div>
      ))}

      <h2>Total : {total} €</h2>
    </div>
  );
}

export default Cart;