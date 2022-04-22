import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';

import { NinjasRoutingModule } from './ninjas-routing.module';

import { AddComponent } from './pages/add/add.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { NinjaCardComponent } from './components/ninja-card/ninja-card.component';
import { SearchComponent } from './pages/search/search.component';
import { ViewComponent } from './pages/view/view.component';
import { ImagePipe } from './pipes/image.pipe';
import { FirstWordPipe } from './pipes/first-word.pipe';
import { ArrayChipsComponent } from './components/array-chips/array-chips.component';

@NgModule({
  declarations: [
    AddComponent,
    HomeComponent,
    ListComponent,
    NinjaCardComponent,
    SearchComponent,
    ViewComponent,

    ImagePipe,
      FirstWordPipe,
      ArrayChipsComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    NinjasRoutingModule,
  ]
})
export class NinjasModule { }
