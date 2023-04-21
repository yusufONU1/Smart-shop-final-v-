import {Product} from "./product.model";
import {PromotionService} from "./promotion-service";

export class SparService implements PromotionService {
  // @ts-ignore
  async getProducts(): Promise<Product[]> {
    // Implementation here
  }
}
