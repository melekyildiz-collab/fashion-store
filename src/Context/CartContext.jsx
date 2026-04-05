const addToCart = (product) => {
  const existing = cart.find((item) => item.name === product.name);

  if (existing) {
    setCart(
      cart.map((item) =>
        item.name === product.name
          ? { ...item, qty: (item.qty || 1) + 1 }
          : item
      )
    );
  } else {
    setCart([...cart, { ...product, qty: 1 }]);
  }
};