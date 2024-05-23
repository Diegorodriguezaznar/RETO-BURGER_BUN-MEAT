import { ProductoRepository } from '../repository/movieRepository.js';

export class ProductoService {
    static async listarProductos() {
        return await ProductoRepository.getProductos();
    }
}

