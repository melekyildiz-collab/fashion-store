import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./Cart.module.css";

function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);
  const [selectedImage, setSelectedImage] = useState(null);

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Panier 🛒</h1>

      {cart.length === 0 && <p className={styles.cartEmpty}>Panier vide</p>}

      {cart.map((item, index) => (
        <div key={index} className={styles.cartItem}>
          <div className={styles.cartInfo}>
            <span>{item.name}</span>
            <span>{item.price * (item.qty || 1)} €</span>
          </div>

          <div className={styles.cartQty}>
            <button onClick={() => decreaseQty(index)}>-</button>
            <span>{item.qty || 1}</span>
            <button onClick={() => increaseQty(index)}>+</button>
          </div>

          <div className={styles.cartActions}>
            <button onClick={() => setSelectedImage(item.image)}>Voir 👁️</button>
            <button onClick={() => removeFromCart(index)}>❌ Supprimer</button>
          </div>
        </div>
      ))}

      <h2>Total : {total} €</h2>

      {selectedImage && (
        <div className={styles.modal} onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="preview" className={styles.modalImage} />
        </div>
      )}
    </div>
  );
}

export default Cart;