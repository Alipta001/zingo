// services/cartApi.ts
import AxiosInstance from "@/app/api/axios/axios";
import endPoints from "@/app/api/endPoints/endPoints";

// 1️⃣ View cart
export const fetchCartApi = async () => {
  const res = await AxiosInstance.get(endPoints.cart.view);
  return res.data;
};

// 2️⃣ Add item OR update quantity
export const addToCartApi = async (
  menu_item_id: string,
  quantity: number
) => {
  return AxiosInstance.post(endPoints.cart.add, {
    menu_item_id,
    quantity,
  });
};

// 3️⃣ Remove single item
export const removeCartItemApi = async (menu_item_id: string) => {
  return AxiosInstance.post(endPoints.cart.remove, {
    menu_item_id,
  });
};

// 4️⃣ Clear full cart
export const clearCartApi = async () => {
  return AxiosInstance.post(endPoints.cart.clear);
};

// 5️⃣ Calculate total
export const calculateCartTotalApi = async () => {
  const res = await AxiosInstance.get(endPoints.cart.calculate);
  return res.data;
};
