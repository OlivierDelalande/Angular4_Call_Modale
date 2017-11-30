import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommonModaleComponent} from './common-modale.component';
import {ModaleDirective} from '../../directives/modal.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CommonModaleComponent, ModaleDirective],
  exports: [CommonModaleComponent]
})
export class ModaleModule { }


