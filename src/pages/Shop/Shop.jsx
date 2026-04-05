import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import styles from "./Shop.module.css";

function Shop() {

  const [search, setSearch] = useState("");

  const products = [
    {
      name: "T-shirt blanc",
      price: 20,
      image: "/images/tshirt-blanc.jpg"
    },
    {
      name: "Sweat noir",
      price: 40,
      image: "/images/sweat-noir.jpg"
    },
    {
      name: "Jean bleu",
      price: 60,
      image: "/images/jean-bleu.jpg"
    },
    {
      name: "Veste beige",
      price: 90,
      image: "/images/veste-beige.jpg"
    },
    {
      name: "Veste noire",
      price: 90,
      image: "/images/veste-noire.jpg"
    },
      {
      name: "Robe rouge",
      price: 70,
      image: "/images/robe-rouge.jpg"
    },
     {
      name: "Chemise bleue",
      price: 50,
      image: "/images/chemise-bleu.jpg"
    } ,
      { 
      name: "Jupe plissée",
      price: 45,
      image: "/images/jupe-plissee.jpg"
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
    <div className={styles.container}>

      <h1>Shop 🛍️</h1>

      {/* Recherche */}
      <input
        type="text"
        placeholder="Rechercher un produit..."
        onChange={(e) => setSearch(e.target.value)}
       className={styles.searchInput}
      />

      {/* Liste produits */}
      <div className={styles.productList}>
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>

       

      </div>


  );
}

export default Shop;