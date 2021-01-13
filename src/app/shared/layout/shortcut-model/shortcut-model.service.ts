import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ShortcutModelComponent } from './shortcut-model.component';

@Injectable({
  providedIn: 'root'
})
export class ShortcutModelService {
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  public openModal() {
    this.bsModalRef = this.modalService.show(ShortcutModelComponent,
      {
        class: 'modal-dialog-top modal-transparent'
      });
  }
}
