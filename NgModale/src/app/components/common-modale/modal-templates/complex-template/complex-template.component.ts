import {
  Component,
  Input,
} from '@angular/core';
import {ModaleService} from '../../../../services/modale.service';


@Component({
  selector: 'app-complex-template',
  templateUrl: './complex-template.component.html',
  styleUrls: ['./complex-template.component.css']
})

export class ModaleCtrl {

  @Input() data;

  constructor(private ModaleService: ModaleService) {
  }

  yes() {
    console.log('yes');
  }

  no() {
    console.log('no');
    this.ModaleService.closeModale();
  }

}
