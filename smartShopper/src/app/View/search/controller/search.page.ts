import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Supermarket} from "../models/supermarket";
// import {BrowserModule} from "@angular/platform-browser";


// This is the controller in the MVC pattern, responsible for managing the logic and state of the view.
@Component({
  selector: 'app-search',
  templateUrl: '../view/search.page.html',
  styleUrls: ['../view/search.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]

})
export class SearchPage implements OnInit {
  searchTerm = ''; // The user's search term
  supermarkets: Supermarket[] = []; // The list of supermarkets loaded from the API
  searchResults: any[] = []; // The list of search results to display in the view


  constructor(private http: HttpClient) {
    this.loadSupermarkets();
  }

// Loads the list of supermarkets from the API on initialization
  loadSupermarkets() {
    const url = 'https://raw.githubusercontent.com/supermarkt/checkjebon/main/data/supermarkets.json';
    this.http.get<Supermarket[]>(url).subscribe((data) => {
      this.supermarkets = data;
    });
  }

  ngOnInit() {}

  // Searches for products matching the user's search term and populates the searchResults array.
  search() {
    // If the search term is empty or only contains whitespace, return early
    this.searchResults = [];
    if (!this.searchTerm.trim()) {
      return;
    }
    // Convert the search term to lowercase for case-insensitive search
    const term = this.searchTerm.toLowerCase();
    for (const supermarket of this.supermarkets) {
      for (const product of supermarket.d) {
        if (product.n.toLowerCase().includes(term)) {
          //If a matching product is found, add its details to the search results array
          this.searchResults.push({
            supermarket: supermarket.n,
            logo: supermarket.i,
            name: product.n,
            price: product.p
          });
          // Break out of the inner loop to avoid adding duplicate products from the same supermarket
          break;
        }
      }
    }
    this.searchResults.sort((a, b) => a.price - b.price);
  }

}
