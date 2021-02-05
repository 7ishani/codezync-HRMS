import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DepartmentComponent} from '../department/department.component';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  public openModalDepartment(){
    this.bsModalRef = this.modalService.show(DepartmentComponent,
    {
      class: 'modal-xl'
    });
  }

}
