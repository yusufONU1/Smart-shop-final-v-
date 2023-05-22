import {Product} from "./product.model";
import {PromotionService} from "./promotion-service";
import axios from "axios";
import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SparService implements PromotionService {
  private apiUrl = 'http://[::1]:3000/productiis';

  constructor() {
  }

  async getProducts(): Promise<Product[]> {
    try {
      const response = await axios.get<Product[]>(this.apiUrl);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}

