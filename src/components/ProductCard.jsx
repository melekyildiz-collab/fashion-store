import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ name, price, image }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <img src={image} alt={name} width="150" />
      <h3>{name}</h3>
      <p>{price} €</p>

      <button
        onClick={() =>
          addToCart({
            name: name,
            price: price,
            image: image,
            qty: 1,
          })
        }
      >
        Ajouter au panier
      </button>
    </div>
  );
}

export default ProductCard;