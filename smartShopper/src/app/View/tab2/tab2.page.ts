import {Component, OnInit} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';
import {CurrencyPipe, NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CurrencyPipe, NgForOf, FormsModule]
})
export class Tab2Page implements OnInit{
  wishlist: any[] = [];

  constructor() { }

  ngOnInit() {
    // debugger
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      this.wishlist = JSON.parse(storedWishlist);
    }
  }

  addToWishlist(item: any) {
    // Check if item already exists in wishlist
    if (this.wishlist.find(wishlistItem => wishlistItem.id === item.id)) {
      return;
    }

    // Add item to wishlist
    debugger;
    console.log('Adding item to wishlist:', item);
    this.wishlist.push(item);
    console.log('Wishlist:', this.wishlist);
    // Save updated wishlist to localStorage
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));

  }

  removeFromWishlist(item: any) {
    this.wishlist = this.wishlist.filter((i) => i.name !== item.name);
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
  }

}
