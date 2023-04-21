import {Product} from "./product.model";

export interface PromotionService {
  getProducts(): Promise<Product[]>;
}
