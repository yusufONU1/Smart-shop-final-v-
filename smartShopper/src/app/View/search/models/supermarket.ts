import {Product} from "./product";

export interface Supermarket {
  n: string; // name of the supermarket
  i: string; // image/logo of the supermarket
  d: Product[]; //list of products offered by the supermarket
}
