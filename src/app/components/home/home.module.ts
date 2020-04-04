import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

import {MovieImagePipe} from '../../pipes/movie-image.pipe';
import { GaleryComponent } from './galery/galery.component';

@NgModule({
  declarations: [
    HomeComponent,
    MovieImagePipe,
    GaleryComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
