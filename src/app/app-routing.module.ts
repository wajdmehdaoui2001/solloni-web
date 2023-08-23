import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnoncesViewComponent } from './views/annonces-view/annonces-view.component';
import { AnnonceSingleViewComponent } from './views/annonce-single-view/annonce-single-view.component';

const routes: Routes = [
  {path:'annonces',component:AnnoncesViewComponent},
  {path:'annonce/:id',component:AnnonceSingleViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
