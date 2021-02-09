import { Component, OnInit } from '@angular/core';
import { EmployeeProfileService } from '../../employee-profile/employee-profile.service';

@Component({
  selector: 'app-view-employee-details',
  templateUrl: './view-employee-details.component.html',
  styleUrls: ['./view-employee-details.component.css']
})
export class ViewEmployeeDetailsComponent implements OnInit {

  constructor(public employeeService: EmployeeProfileService ) { }

  ngOnInit(): void {
  }

  // openEmployeeProfile($event: MouseEvent){
  //   $event.preventDefault();
  //   this.employeeService.openModal();
  // }

  openEmployeeProfile(){
   this.employeeService.openModal();
  }

  openModal(){
    
  }

}
