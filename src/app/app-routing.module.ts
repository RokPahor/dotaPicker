import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroGridComponent } from './components/hero-grid/hero-grid.component';


const routes: Routes = [
  { path: '', component: HeroGridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
