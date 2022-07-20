import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [shops, setShops] = useState(null);
  const [currentshops, setCurrentShops] = useState(null);
  const [shopcarts, setShopcarts] = useState(null);
  const [order, setOrder] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(JSON.parse(localStorage.getItem("orderTotal")));
  }, []);

  const onAdd = (product) => {
    setTotalPrice((prevtotalPrice) => prevtotalPrice + product.price * 1);
    localStorage.setItem("orderTotal", JSON.stringify(totalPrice));

    const checkProductInCart = order.find((item) => item.name === product.name);

    if (checkProductInCart) {
      const updatedCartItems = order.map((cartProduct) => {
        if (cartProduct.name === product.name) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }
        return {
          ...cartProduct,
        };
      });

      setOrder(updatedCartItems);
      localStorage.setItem("order", JSON.stringify(updatedCartItems));
    } else {
      product.quantity = 1;

      setOrder([...order, { ...product }]);
      localStorage.setItem("order", JSON.stringify([...order, { ...product }]));
    }

    toast.success(`Один ${product.name} добавлен в заказ`);
  };

  const onRemove = (product) => {
    if (product.quantity === 1) return;
    setTotalPrice((prevtotalPrice) => prevtotalPrice - product.price * 1);
    localStorage.setItem("orderTotal", JSON.stringify(totalPrice));

    const updatedCartItems = order.map((cartProduct) => {
      if (cartProduct.name === product.name) {
        return {
          ...cartProduct,
          quantity: cartProduct.quantity - 1,
        };
      }
      return {
        ...cartProduct,
      };
    });

    setOrder(updatedCartItems);
    localStorage.setItem("order", JSON.stringify(updatedCartItems));

    toast.success(`Один ${product.name} удален из заказа`);
  };

  return (
    <StateContext.Provider
      value={{
        shops,
        setShops,
        shopcarts,
        setShopcarts,
        currentshops,
        setCurrentShops,
        order,
        setOrder,
        totalPrice,
        onAdd,
        onRemove,
        setTotalPrice,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
