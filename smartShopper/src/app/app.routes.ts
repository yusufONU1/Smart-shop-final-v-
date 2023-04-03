import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./View/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'search',
    loadComponent: () => import('./View/search/search.page').then(m => m.SearchPage)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
