export const API_SHOPS = process.env.REACT_APP_BASE_URL + "shops";
export const API_SHOPITEMS = (shop) => {
  return process.env.REACT_APP_BASE_URL + "shopItems/" + shop;
};
export const API_ORDERS = process.env.REACT_APP_BASE_URL + "orders";
