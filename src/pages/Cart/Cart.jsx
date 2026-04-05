import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./Cart.module.css";

function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);
  console.log({ cart, removeFromCart, increaseQty, decreaseQty });
  const [isModalOpen, setIsModalOpen] = useState(false);
const [modalImage, setModalImage] = useState(null);


 const total = cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);

 const openModal = (imageUrl) => {
   setModalImage(imageUrl);
   setIsModalOpen(true);
 };

 const closeModal = () => {
   setIsModalOpen(false);
   setModalImage(null);
 };

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Panier 🛒</h1>

      {cart.length === 0 && <p className={styles.cartEmpty}>Panier vide</p>}

      {cart.map((item, index) => (
        <div key={index} className={styles.cartItem}>
          <div className={styles.cartInfo}>
            <h3>{item.name}</h3>
            <p>{item.price} €</p>
          </div>

          <div className={styles.cartQty}>
            <button className={styles.qtyBtn} onClick={() => decreaseQty(index)}>-</button>
            <span>{item.qty || 1}</span>
            <button className={styles.qtyBtn} onClick={() => increaseQty(index)}>+</button>
          </div>

          <div className={styles.cartActions}>
            <button className={styles.viewBtn} onClick={() => openModal(item.image)}>
              👁 Voir
            </button>
            <button className={styles.removeBtn} onClick={() => removeFromCart(index)}>
              ❌ Supprimer
            </button>
          </div>
        </div>
      ))}
      <h2>Total : {total} €</h2>
    {isModalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <img src={modalImage} alt="Produit" className={styles.modalImage} />
        </div>
      )} 
    </div>
  );
}

export default Cart;