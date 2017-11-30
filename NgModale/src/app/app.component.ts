import { Component } from '@angular/core';
import {ModaleService} from './services/modale.service';
import {ModaleCtrl} from './components/common-modale/modal-templates/complex-template/complex-template.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private modalService: ModaleService) {
  }

  showModale() {
    this.modalService.init(ModaleCtrl, 'His cognitis Gallus ut serpens adpetitus telo vel saxo iamque spes extremas opperiens et succurrens saluti suae quavis ratione colligi omnes iussit armatos et cum starent attoniti, districta dentium acie stridens adeste inquit viri fortes mihi periclitanti vobiscum.');
  }
}
