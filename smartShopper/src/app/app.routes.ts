import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import {NgModule} from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./View/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'search',
    loadComponent: () => import('./View/search/controller/search.page').then(m => m.SearchPage)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule ],

})
export class TabsPageRoutingModule {}
