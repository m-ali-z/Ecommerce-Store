import { create } from "zustand";
import { getAllProductsForUser } from "@/lib/product";

const useProductStore = create((set: any, get: any) => ({
  products: [],
  loading: false,
  error: null,
  // Action to fetch products from an API
  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const products: ProductType[] = await getAllProductsForUser();
      set({ products, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch products", loading: false });
    }
  },
}));

export default useProductStore;
