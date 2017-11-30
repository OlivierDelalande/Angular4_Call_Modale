import {
  Injectable,
  Type,
} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

interface ModalContent  {
  component: Type<any>,
  string: string
}

@Injectable()
export class ModaleService {

  modalObs$: BehaviorSubject<ModalContent>;
  modalContent: ModalContent;

  constructor() {
    this.modalObs$ = new BehaviorSubject(null)
  }

  init(component, string) {
    this.modalContent = {
      component: component,
      string: string
    };

    this.modalObs$.next(this.modalContent);
  }

  getModal() {
    return this.modalObs$;
  };

}
