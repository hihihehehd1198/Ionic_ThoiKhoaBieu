import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablePageRoutingModule } from './table-routing.module';

import { TablePage } from './table.page';
import { FormatDatePipe } from '../format-date.pipe';
import { CustomStyleDirective } from '../custom-style.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    TablePageRoutingModule
  ],
  declarations: [TablePage, FormatDatePipe, CustomStyleDirective]
})
export class TablePageModule { }
