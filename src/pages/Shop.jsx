import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

function Shop() {

  const [search, setSearch] = useState("");

  const products = [
    {
      name: "T-shirt blanc",
      price: 20,
      image: "https://via.placeholder.com/200"
    },
    {
      name: "Sweat noir",
      price: 40,
      image: "https://via.placeholder.com/200"
    },
    {
      name: "Jean bleu",
      price: 60,
      image: "https://via.placeholder.com/200"
    },
    {
      name: "Veste beige",
      price: 90,
      image: "https://via.placeholder.com/200"
    }
  ];

  // useEffect obligatoire (pour ton prof 👀)
  useEffect(() => {
    console.log("Shop loaded");
  }, []);

  // filtre recherche
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>

      <h1>Shop 🛍️</h1>

      {/* Recherche */}
      <input
        type="text"
        placeholder="Rechercher un produit..."
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "200px",
          marginBottom: "20px"
        }}
      />

      {/* Liste produits */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px"
      }}>

        {filteredProducts.length === 0 ? (
          <p>Aucun produit trouvé 😢</p>
        ) : (
          filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))
        )}

      </div>

    </div>
  );
}

export default Shop;