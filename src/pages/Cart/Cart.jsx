import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./Cart.module.css";

function Cart() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
    <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Panier 🛒</h1>

      {cart.length === 0 ? (
        <p className={styles.cartEmpty}>Votre panier est vide</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className={styles.cartItem}>
              <span>{item.name}</span>
              <span>{item.price} €</span>
            </div>
          ))}
          <h2>Total : {total} €</h2>
        </>
      )}
    </div>
    </>
  );
}
export default Cart;