import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {ModaleDirective} from '../../Directives/modal.directive';
import {ModaleService} from '../../services/modale.service';

@Component({
  selector: 'app-complex-template',
  templateUrl: './complex-template.component.html',
  styleUrls: ['./complex-template.component.css']
})

export class ModaleCtrl {

  @Input() data;

}
