import { useContext ,useState} from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./Cart.module.css";

function Cart() {
  const { cart } = useContext(CartContext);
 const [selectedImage, setSelectedImage] = useState(null);
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
               <button
                className={styles.viewBtn}
                onClick={() => setSelectedImage(item.image)}
              >
                Voir 👁️
              </button>
            </div>
          ))}
          <h2>Total : {total} €</h2>
        </>
      )}
      {selectedImage && (
        <div
          className={styles.modal}
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="preview"
            className={styles.modalImage}
          />
        </div>
      )}
    </div>
    </>
  );
}
export default Cart;