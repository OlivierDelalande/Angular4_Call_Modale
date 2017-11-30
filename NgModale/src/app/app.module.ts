import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ModaleModule} from './components/common-modale/common-modale.module';
import {ModaleService} from './services/modale.service';
import {ModaleCtrl} from './components/common-modale/modal-templates/complex-template/complex-template.component';
import {ModaleDirective} from './directives/modal.directive';

@NgModule({
  declarations: [
    AppComponent,
    ModaleCtrl,
  ],
  imports: [
    BrowserModule,
    ModaleModule
  ],
  entryComponents: [ ModaleCtrl ],
  providers: [ModaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
