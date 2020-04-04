import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from '../search/search.component';


const routes: Routes = [
  {path: "",component:HomeComponent},
  //{path:"**",redirectTo:"", pathMatch:"full"}
 // {path:"",redirectTo:"/home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
