import { API_SHOPS, API_SHOPITEMS, API_ORDERS } from "./constants";

export const getShops = async () => {
  const res = await fetch(API_SHOPS);
  return await res.json();
};

export const getShopItems = async (shop) => {
  const res = await fetch(API_SHOPITEMS(shop));
  return await res.json();
};

export const postOrders = async (params) => {
  const res = await fetch(API_ORDERS, {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await res.json();
};
