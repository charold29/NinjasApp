import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

import { NinjasRoutingModule } from './ninjas-routing.module';

import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { ViewComponent } from './pages/view/view.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';



@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    ViewComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    NinjasRoutingModule,
  ]
})
export class NinjasModule { }
