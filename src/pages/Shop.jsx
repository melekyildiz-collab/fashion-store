import ProductCard from "../components/ProductCard";

function Shop() {
  return (
    <div>
      <h1>Shop 🛍️</h1>

      <ProductCard
        name="T-shirt blanc"
        price={20}
        image="https://via.placeholder.com/150"
      />

      <ProductCard
        name="Sweat noir"
        price={40}
        image="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default Shop;