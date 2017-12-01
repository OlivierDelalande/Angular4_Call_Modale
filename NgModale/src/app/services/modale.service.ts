import {
  Injectable,
  Type,
} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

interface ModalContent  {
  component: Type<any>,
  texte: string,
  color: string
}

@Injectable()
export class ModaleService {

  modalObs$: BehaviorSubject<ModalContent>;
  modalContent: ModalContent;

  constructor() {
    this.modalObs$ = new BehaviorSubject(null);
  }

  init(component, string, color) {
    this.modalContent = {
      component: component,
      texte: string,
      color: color
    };

    this.modalObs$.next(this.modalContent);
  }

  getModal() {
    return this.modalObs$;
  };

  closeModale() {
    this.modalContent = {
      component: null,
      texte: null,
      color: null
    };
    this.modalObs$.next(null);
  }

}
