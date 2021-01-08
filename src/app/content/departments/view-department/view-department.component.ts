import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentApiService } from '../services/department-api.service';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css']
})
export class ViewDepartmentComponent implements OnInit {

  department: any;

  // constructor(private router: Router,
  //             private departmentApiService: DepartmentApiService) { }

  constructor(){}

  ngOnInit(): void {
    //this.getDepartmentDetails();
  }

  // getDepartmentDetails(){
  //   this.departmentApiService.getDepartments();
  // }

  editDepartment(){

  }

  deleteDepartment(){

  }

}
