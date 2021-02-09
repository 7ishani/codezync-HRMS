import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EmployeeProfileComponent } from './employee-profile.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeProfileService {
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  // public openModal() {
  //   this.bsModalRef = this.modalService.show(EmployeeProfileComponent,
  //     {
  //       class:"modal_aside_left"
  //     });
  // }

   public openModal() {
     console.log('open');
    this.modalService.show(EmployeeProfileComponent,{});
  }
}
