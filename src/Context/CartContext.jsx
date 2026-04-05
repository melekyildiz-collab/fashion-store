import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
const [cart, setCart] = useState([]);

// ✅ Ajouter au panier
const addToCart = (product) => {
setCart((prevCart) => [...prevCart, product]);
};

// ✅ Supprimer du panier
const removeFromCart = (index) => {
setCart((prevCart) => prevCart.filter((_, i) => i !== index));
};

// ✅ Augmenter quantité
const increaseQty = (index) => {
setCart((prevCart) =>
prevCart.map((item, i) =>
i === index
? { ...item, qty: (item.qty || 1) + 1 }
: item
)
);
};

// ✅ Diminuer quantité
const decreaseQty = (index) => {
setCart((prevCart) =>
prevCart.map((item, i) =>
i === index
? {
...item,
qty: item.qty > 1 ? item.qty - 1 : 1,
}
: item
)
);
};

return (
<CartContext.Provider
value={{
cart,
addToCart,
removeFromCart,
increaseQty,
decreaseQty,
}}
>
{children}
</CartContext.Provider>
);
}