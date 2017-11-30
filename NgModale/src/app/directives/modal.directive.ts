import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[modale]',
})

export class ModaleDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

