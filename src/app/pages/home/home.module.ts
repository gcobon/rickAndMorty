import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { ListComponent } from './list/list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

import { HomeRoutingModule } from './home-routing.module';

import { TabMenuModule } from 'primeng/tabmenu';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DividerModule } from 'primeng/divider';

const ngPrimeModules = [
  TabMenuModule,
  CardModule,
  ButtonModule,
  TagModule,
  ProgressSpinnerModule,
  DividerModule,
];

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ListComponent,
    CharacterDetailComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, ngPrimeModules],
})
export class HomeModule {}
