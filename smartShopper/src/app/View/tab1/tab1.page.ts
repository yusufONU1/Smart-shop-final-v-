import {Component, OnInit} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';
import {RouterLink, RouterModule} from '@angular/router';
import {Product} from "./product.model";
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import { DirkService} from './dirk-service';
import {ServiceFilter} from "./service-filter"
import {PromotionService} from "./promotion-service"

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, RouterLink, NgForOf, NgIf, CurrencyPipe],
  providers: [ServiceFilter],
})
export class Tab1Page implements OnInit{

  products: Product[] = [];

  constructor(private serviceFilter: ServiceFilter) {}

  async ngOnInit() {
    await this.updateProducts();
  }

  async updateProducts() {
    const service: PromotionService = this.serviceFilter.getService();
    this.products = await service.getProducts();
  }

  async onServiceChange(event: any) {
    const serviceType = event.target.value;
    this.serviceFilter.selectService(serviceType);
    await this.updateProducts();
  }
}


//
// products: Product[] = [];
//
//
// constructor(private dirkScrapingService: DirkService) { }
//
// ngOnInit(): void {
//   this.getProducts();
// }
//
// async getProducts(): Promise<void> {
//   this.products = await this.dirkScrapingService.getProducts();
// }
