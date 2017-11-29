import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {ModaleDirective} from '../Directives/modal.directive';
import {ModaleService} from '../services/modale.service';

@Component({
  selector: 'app-common-modale',
  templateUrl: './common-modale.component.html',
  styleUrls: ['./common-modale.component.css'],
})
export class CommonModaleComponent implements AfterViewInit, OnDestroy {

  @ViewChild(ModaleDirective) modale: ModaleDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private modaleService: ModaleService) {
  }

  modalConfig: any;

  ngAfterViewInit() {
    this.getAds();
  }

  loadComponent() {

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.modalConfig.component);

    let viewContainerRef = this.modale.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance)['data'] = this.modalConfig.string;
  }

  getAds() {
    return this.modaleService.getModal().subscribe((modalConfig) => {
      this.modalConfig = modalConfig;
      if (modalConfig) {
        this.loadComponent();
      }
    });
  }

  ngOnDestroy() {
    // this.loadComponent();
  }

}
