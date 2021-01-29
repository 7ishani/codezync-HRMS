import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EmployeeProfileComponent } from './employee-profile.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeProfileService {
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  public openModal() {
    this.bsModalRef = this.modalService.show(EmployeeProfileComponent,
      {
        class:"modal-xl"
      });
  }
}
