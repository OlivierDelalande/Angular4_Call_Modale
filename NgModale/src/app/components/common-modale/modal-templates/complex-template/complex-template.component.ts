import {
  Component,
  Input
} from '@angular/core';


@Component({
  selector: 'app-complex-template',
  templateUrl: './complex-template.component.html',
  styleUrls: ['./complex-template.component.css']
})

export class ModaleCtrl {

  @Input() data;

  yes() {
    console.log('yes');
  }

  no() {
    console.log('no');
  }

}
