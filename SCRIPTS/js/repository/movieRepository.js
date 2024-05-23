import { FetchUtil } from "./fetchutil.js";

export class ProductoRepository {
  static PRODUCTOS = "productos";
  static async getProductos() {
    try {
      const response = await fetch(`${FetchUtil.BASE_URL}/${this.PRODUCTOS}`);
      if (!response.ok) {
        throw new Error("Error al obtener los productos");
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
