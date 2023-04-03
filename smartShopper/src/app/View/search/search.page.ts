import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {HttpClient, HttpClientModule} from '@angular/common/http';
// import {BrowserModule} from "@angular/platform-browser";


interface Supermarket {
  n: string;
  i: string;
  d: Product[];
}

interface Product {
  n: string;
  p: number;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]

})
export class SearchPage implements OnInit {

  searchTerm = '';
  supermarkets: Supermarket[] = [];
  searchResults: any[] = [];

  constructor(private http: HttpClient) {
    this.loadSupermarkets();
  }

  loadSupermarkets() {
    const url = 'https://raw.githubusercontent.com/supermarkt/checkjebon/main/data/supermarkets.json';
    this.http.get<Supermarket[]>(url).subscribe((data) => {
      this.supermarkets = data;
    });
  }

  ngOnInit() {}

  search() {
    this.searchResults = [];
    if (!this.searchTerm.trim()) {
      return;
    }
    const term = this.searchTerm.toLowerCase();
    for (const supermarket of this.supermarkets) {
      for (const product of supermarket.d) {
        if (product.n.toLowerCase().includes(term)) {
          this.searchResults.push({
            supermarket: supermarket.n,
            logo: supermarket.i,
            name: product.n,
            price: product.p
          });
          break;
        }
      }
    }
    this.searchResults.sort((a, b) => a.price - b.price);
  }

}
