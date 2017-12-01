import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ViewChild,
} from '@angular/core';
import {ModaleDirective} from '../../directives/modal.directive';
import {ModaleService} from '../../services/modale.service';

@Component({
  selector: 'app-common-modale',
  templateUrl: './common-modale.component.html',
  styleUrls: ['./common-modale.component.css'],
})
export class CommonModaleComponent implements AfterViewInit {

  @ViewChild(ModaleDirective) modale: ModaleDirective;
  modalConfig: any;
  viewContainerRef: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private modaleService: ModaleService) {
  }

  ngAfterViewInit() {
    this.getAds();
  }

  loadComponent() {

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.modalConfig.component);

    this.viewContainerRef = this.modale.viewContainerRef;
    this.viewContainerRef.clear();

    let componentRef = this.viewContainerRef.createComponent(componentFactory);
    (componentRef.instance)['texte'] = this.modalConfig.texte;
    (componentRef.instance)['color'] = this.modalConfig.color;
  }

  getAds() {
    return this.modaleService.getModal().subscribe((modalConfig) => {
      this.modalConfig = modalConfig;
      if (modalConfig) {
        this.loadComponent();
      }
      if(this.viewContainerRef && !modalConfig){
        this.viewContainerRef.clear();
      }
    });
  }
}
