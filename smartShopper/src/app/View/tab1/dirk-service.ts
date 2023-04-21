import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './product.model';
import {PromotionService} from './promotion-service';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DirkService implements PromotionService{
  private apiUrl = 'http://[::1]:3000/products';

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
