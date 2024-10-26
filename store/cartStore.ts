import { create } from "zustand";

const useProductStore = create((set: any, get: any) => ({
  products: [],
  error: null,
  addToCart: async (productId: any, userId: any) => {
    try {
    } catch (error) {
      set({ error: "There is some error!" });
    }
  },
}));

export default useProductStore;
