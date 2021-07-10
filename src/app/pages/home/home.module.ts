import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { TabMenuModule } from 'primeng/tabmenu';

const ngPrimeModules = [
  TabMenuModule,
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ngPrimeModules
  ]
})
export class HomeModule { }
