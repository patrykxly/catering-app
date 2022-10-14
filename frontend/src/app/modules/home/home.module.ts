import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderModule } from '../header/header.module';
import { CarouselModule } from '../carousel/carousel.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeaderModule,
    CarouselModule,
    RouterModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
