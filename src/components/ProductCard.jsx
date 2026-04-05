import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ name, price, image }) {

  const { addToCart } = useContext(CartContext);

  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h3>{name}</h3>
      <p>{price} €</p>

      <button onClick={() => addToCart({ name, price, image })}>
        Ajouter
      </button>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "10px",
    width: "200px",
    textAlign: "center",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
  },
  image: {
    width: "100%",
    borderRadius: "10px"
  }
};

export default ProductCard;