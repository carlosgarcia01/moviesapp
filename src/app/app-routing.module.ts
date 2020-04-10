import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';


const routes: Routes = [
  {path:"login",component: LoginComponent},
  {path:"search", component:SearchComponent},
  {path:"search/:text", component:SearchComponent},
  {path:"movie/:id/:page", component:MovieInfoComponent},
  {path:"home",loadChildren: ()=>import ("./components/home/home.module")
                                .then(module => module.HomeModule)},
  {path:"", redirectTo:"/home",pathMatch:"full"}                                
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
