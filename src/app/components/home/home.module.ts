import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from '../movie/movie.component';
import { MoviesComponent } from '../movies/movies.component';

@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent,
    MoviesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
