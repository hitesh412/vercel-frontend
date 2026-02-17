import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (i) => i.id === item.id && i.size === item.size
      );

      if (existingIndex >= 0) {
        const updated = [...prev];
        const existingItem = updated[existingIndex];
        const newQuantity = existingItem.quantity + item.quantity;
        updated[existingIndex] = {
          ...existingItem,
          quantity: newQuantity,
          totalPrice: existingItem.basePrice * newQuantity,
        };
        return updated;
      } else {
        return [...prev, { ...item, totalPrice: item.basePrice * item.quantity }];
      }
    });
  };

  const removeFromCart = (id, size) => {
    setCart((prev) => prev.filter((item) => !(item.id === id && item.size === size)));
  };

  const increaseQty = (id, size) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.basePrice * (item.quantity + 1),
            }
          : item
      )
    );
  };

  const decreaseQty = (id, size) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: item.basePrice * (item.quantity - 1),
            }
          : item
      )
    );
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  const clearCart = () => {
  setCart([]);
};


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        totalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
