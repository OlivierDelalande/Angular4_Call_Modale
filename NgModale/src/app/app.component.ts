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
    this.modalService.init(ModaleCtrl, 'toto', 'green');
  }
}
