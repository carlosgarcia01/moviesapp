import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from '../movie/movie.component';
import { MoviesComponent } from '../movies/movies.component';


const routes: Routes = [
  {path: "home",component:HomeComponent},
  {path:"movies",component:MoviesComponent},
  {path:"movie/:id",component:MovieComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
