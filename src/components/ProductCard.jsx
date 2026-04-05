import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "./ProductCard.module.css";

function ProductCard({ name, price, image }) {

  const { addToCart } = useContext(CartContext);

  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.price}>{price} €</p>

      <button className={styles.button} onClick={() => addToCart({ name, price, image })}>
        Ajouter
      </button>
    </div>
  );
}


export default ProductCard;